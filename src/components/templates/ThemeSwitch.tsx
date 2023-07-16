'use client'

import { MoonIcon, SunIcon } from "../icons"

interface ThemeSwitchProps {
    theme: string,
    switchTheme: () => void
}

export default function ThemeSwitch({theme, switchTheme}: ThemeSwitchProps) {
    function onDark() {
        return (
            <div onClick={switchTheme}
                className={`
                    sm:flex items-center cursor-pointer
                    bg-gradient-to-r from-yellow-300 to-yellow-500
                    w-14 lg:w-24 h-8 p-1 rounded-full
                `}>
                <div className={`
                    flex items-center justify-center
                    bg-white text-yellow-600 w-6 h-6 rounded-full
                `}>
                    {SunIcon}
                </div>
                <div className={`
                    hidden lg:flex items-center ml-4
                    text-gray-50 text-sm
                `}>
                    <span>Light</span>
                </div>
            </div>
        )
    }

    function onLight() {
        return (
            <div onClick={switchTheme}
                className={`
                    flex items-center justify-end cursor-pointer
                    bg-gradient-to-r from-gray-500 to-gray-900
                    w-14 lg:w-24 h-8 p-1 rounded-full
                `}>
                <div className={`
                    hidden lg:flex items-center mr-5
                    text-gray-300 text-sm
                `}>
                    <span>Dark</span>
                </div>
                <div className={`
                    flex items-center justify-center
                    bg-black text-yellow-300 w-6 h-6 rounded-full
                `}>
                    {MoonIcon}
                </div>
            </div>
        )
    }


    return theme === 'dark' ? onDark() : onLight()
}