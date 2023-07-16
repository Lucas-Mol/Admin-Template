'use client'
import { createContext, useState } from "react";

type Theme = 'dark' | ''

interface ThemeContextProps {
    theme: Theme
    switchTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: '',
    switchTheme: () => {}
})

export function ThemeProvider(props: any) {
    const [ theme, setTheme ] = useState<Theme>('dark')

    function switchTheme() {
        console.log('switiching theme')
        setTheme(theme === '' ? 'dark' : '')
    }

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