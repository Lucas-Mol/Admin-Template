import AsideMenu from "./AsideMenu"
import Header from "./Header"
import Content from "./Content"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout({title, subtitle, children}: LayoutProps) {
    return (
        <section className="dark flex h-screen w-screen">
            <AsideMenu />
            <div className={`flex flex-col w-full p-7
            bg-gray-300 text-gray-700
            dark:bg-gray-800 dark:text-gray-200`}>
                <Header title={title} subtitle={subtitle} />
                <Content >
                    {children}
                </Content>
            </div>
        </section>
    )

}