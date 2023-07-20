'use client'
import firebase from '@/database/firebase/config'
import User from '@/model/User'
import { useRouter} from 'next/navigation'
import { createContext, useState } from 'react'

interface AuthContextProps {
    user?: User | null
    loginGoogle?: () => Promise<void>
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

const AuthContext = createContext<AuthContextProps>({})

export function AuthProvider(props: any) {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)

    async function loginGoogle() {
        const response = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider
        )
        
        if(response.user?.email) {
            const responseUser = await normalizeUser(response.user)
            setUser(responseUser)
            router.push('/home')
        }
    }


    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext