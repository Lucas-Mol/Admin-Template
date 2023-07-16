import useThemeContext from '@/data/hook/useThemeContext'
import ThemeSwitch from './ThemeSwitch'
import Title from './Title'

interface HeaderProps {
    title: string
    subtitle: string
}

export default function Header({title, subtitle}: HeaderProps) {
    const { theme, switchTheme} = useThemeContext()!

    return (
        <div className='flex'>
            <Title title={title} subtitle={subtitle} />
            <div className='flex flex-grow justify-end'>
                <ThemeSwitch theme={theme} switchTheme={switchTheme}/>
            </div>
        </div>
    )

}