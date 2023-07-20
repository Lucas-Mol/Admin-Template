'use client'
import FormAuth from "@/components/auth/FormAuth";
import RandomImage from "@/components/auth/RandomImage";
import { useState } from "react";
import useThemeContext from "@/data/hook/useThemeContext";

export default function Auth() {
    const [mode, setMode] = useState<'login' | 'signup'>('login')
    const { theme } =  useThemeContext()!

    return (
        <div className={`${theme}`}>
            <div className={`
                flex h-screen items-center justify-center
                bg-gray-50 text-gray-800
                dark:bg-gray-800 dark:text-gray-200`}>
                {mode === 'login' ? (
                    <>  
                        <RandomImage />
                        <FormAuth mode={mode} setMode={setMode} />
                    </>
                ) : (
                    <>
                        <FormAuth mode={mode} setMode={setMode} />
                        <RandomImage />
                    </>
                )}
            </div>
        </div>
    )
}