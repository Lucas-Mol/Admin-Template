'use client'
import { Dispatch, SetStateAction, useState } from "react"
import AuthInput from "./AuthInput"
import { WarningIcon } from "../icons"
import useAuthContext from "@/data/hook/useAuthContext"
import Loading from "../templates/Loading"

interface FormAuthProps {
    mode: 'login' | 'signup'
    setMode: Dispatch<SetStateAction<"login" | "signup">>
}

export default function FormAuth({mode, setMode}: FormAuthProps) {
    const [ loading, setLoading ] = useState(false)
    const { signin, login, loginGoogle} = useAuthContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState<string>('')

    function showError(message: string, duration = 5) {
        setError(message)
        setTimeout(() => setError(''), duration * 1000)
    }

    async function submit() {
        try{
            setLoading(true)
            if(mode === 'login') {
                await login!(email, password)
            } else {
                await signin!(email, password)
            }
        } catch(e: any) {
            showError(e?.message ?? 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    async function handleLoginGoogle() {
        try {
            setLoading(true)
            await loginGoogle!()
        } catch(e: any) {
            showError(e?.message ?? 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    return loading ? (
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <Loading />
            </div>
        ) : (
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`
                    text-3xl font-bold mb-5
                `}>
                    {mode === 'login' ? 'Login': 'Sign up'}
                </h1>

                {error ? (
                    <div className={`
                        flex py-3 px-5 my-2 items-center
                        border-2 border-red-900 rounded-lg
                        bg-red-600 text-gray-200
                    `}>
                        {WarningIcon}
                        <span className="ml-3">{error}</span>
                    </div>
                ) : null}

                <AuthInput 
                    label="Email" 
                    value={email} 
                    type="email"
                    changeValue={setEmail}
                    required/>
                <AuthInput 
                    label="Password"
                    type="password"
                    value={password} 
                    changeValue={setPassword}
                    required/>

                <button 
                    onClick={submit}
                    className={`
                        w-full 
                        text-white
                        bg-indigo-700 hover:bg-indigo-600
                        rounded-lg px-4 py-3 mt-6
                    `}
                >
                    {mode === 'login' ? 'Login' : 'Signup'}
                </button>

                <hr className="my-6 border-gray-300 w-full"/>

                <button 
                    onClick={handleLoginGoogle}
                    className={`
                        w-full 
                        text-white
                        bg-red-500 hover:bg-red-600
                        rounded-lg px-4 py-3 mt-6
                        flex justify-center items-center
                    `}
                >
                    Enter with Google
                </button>

                {mode === 'login' ? (
                    <p className="mt-4 w-full flex justify-end">
                        First time here?
                        <a onClick={() => setMode('signup')}
                        className="
                            ml-3
                           text-blue-500 hover:text-blue-600 font-semibold cursor-pointer
                        ">
                            Sign up
                        </a>
                    </p>
                ) : (
                    <p className="mt-4">
                        Already signed up?
                        <a onClick={() => setMode('login')}
                            className="
                            ml-3
                            text-blue-500 hover:text-blue-600 font-semibold cursor-pointer
                        ">
                            Login
                        </a>
                    </p>
                )}
            </div>
        )} 