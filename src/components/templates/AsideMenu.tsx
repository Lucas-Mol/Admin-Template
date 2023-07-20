import DesktopAsideMenu from "./DesktopAsideMenu";


export default function AsideMenu() {
    return (
        <aside className="
            bg-gray-300 text-gray-700
            dark:bg-gray-800 dark:text-gray-200">
            <div className="
            hidden md:flex flex-col h-full
            bg-gray-200
            dark:bg-gray-900">
                <DesktopAsideMenu />
            </div>
        </aside>
    )
}