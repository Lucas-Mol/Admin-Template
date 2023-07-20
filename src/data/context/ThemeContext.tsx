'use client'
import { createContext, useEffect, useState } from "react";

interface ThemeContextProps {
    theme: string
    switchTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: '',
    switchTheme: () => {}
})

export function ThemeProvider(props: any) {
    const [ theme, setTheme ] = useState('dark')

    function switchTheme() {
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        setTheme(savedTheme!)
    }, [])

    return (
        <ThemeContext.Provider value={{
            theme,
            switchTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext