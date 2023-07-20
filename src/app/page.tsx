'use client'

import FormAuth from "@/components/auth/FormAuth";
import RandomImage from "@/components/auth/RandomImage";
import { useState } from "react";

export default function Auth() {
    const [mode, setMode] = useState<'login' | 'signup'>('login')

    return (
        <div className="flex h-screen items-center justify-center bg-gray-800 text-gray-300">
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
    )
}