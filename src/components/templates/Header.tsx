import useThemeContext from '@/data/hook/useThemeContext'
import ThemeSwitch from './ThemeSwitch'
import Title from './Title'
import HamburguerMenu from './HamburguerMenu'

interface HeaderProps {
    title: string
    subtitle: string
}

export default function Header({title, subtitle}: HeaderProps) {
    const { theme, switchTheme} = useThemeContext()!

    return (
        <div className='flex w-full justify-between'>
            <div className="md:hidden h-auto
            bg-gray-200
            dark:bg-gray-900">
                <HamburguerMenu />
            </div>
            <Title title={title} subtitle={subtitle} />
            <div className='flex md:flex-grow justify-end items-center pr-3'>
                <ThemeSwitch theme={theme} switchTheme={switchTheme}/>
            </div>
        </div>
    )

}