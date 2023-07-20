'use client'
import AsideMenu from "./AsideMenu"
import Header from "./Header"
import Content from "./Content"
import useThemeContext from "@/data/hook/useThemeContext"
import Authorization from "../auth/Authorization"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout({title, subtitle, children}: LayoutProps) {
    const {theme } =  useThemeContext()!

    return (
        <Authorization>
            <section className={`${theme} flex min-h-screen`}>
                <AsideMenu />
                <div className={`flex flex-col w-full
                md:p-7
                bg-gray-300 text-gray-800
                dark:bg-gray-800 dark:text-gray-200`}>
                    <Header title={title} subtitle={subtitle} />
                    <div className="p-5">
                        <Content >
                            {children}
                        </Content>
                    </div>
                </div>
            </section>
        </Authorization>
    )

}