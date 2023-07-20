'use client'
import firebase from '@/database/firebase/config'
import User from '@/model/User'
import Cookies from 'js-cookie'
import { useRouter} from 'next/navigation'
import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react'

interface AuthContextProps {
    user?: User | null
    loading?: boolean
    signin?: (email: string, password: string) => Promise<void>
    login?: (email: string, password: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}


async function normalizeUser(firebaseUser: firebase.User | null): Promise<User> {
    const token = await firebaseUser!.getIdToken()
    return {
        uuid: firebaseUser!.uid,
        name: firebaseUser!.displayName,
        email: firebaseUser!.email,
        token,
        provider: firebaseUser!.providerData[0]?.providerId,
        profileUrl: firebaseUser!.photoURL
    }
}

function manageCookie(loggedin: boolean) {
    const SEVEN_DAYS = 7
    if(loggedin) {
        Cookies.set('admin-template-auth', loggedin.toString(), {
            expires: SEVEN_DAYS
        })
    } else {
        Cookies.remove('admin-template-auth')
    }
}

const AuthContext = createContext<AuthContextProps>({})

export function AuthProvider(props: any) {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    async function configureSession(firebaseUser: firebase.User | null) {
        if(firebaseUser?.email) {
            const user = await normalizeUser(firebaseUser)
            setUser(user)
            manageCookie(true)
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            manageCookie(false)
            setLoading(false)
            return false
        }
    }

    async function login(email: string, password: string) {
        try {
            const response = await firebase.auth()
                .signInWithEmailAndPassword(email, password)
            
            await configureSession(response.user)
            router.push('/home')
        } finally {
            setLoading(false)
        }
    }

    async function signin(email: string, password: string) {
        try {
            const response = await firebase.auth()
                .createUserWithEmailAndPassword(email, password)
            
            await configureSession(response.user)
            router.push('/home')
        } finally {
            setLoading(false)
        }
    }

    async function loginGoogle() {
        try {
            const response = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider
            )
            
            await configureSession(response.user)
            router.push('/home')
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try{
            await firebase.auth().signOut()
            await configureSession(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-template-auth')) {
            const finishObserver = firebase.auth().onIdTokenChanged(configureSession)
            return () => finishObserver()
        } else {
            setLoading(false)
        }
    }, [])


    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signin,
            login,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext