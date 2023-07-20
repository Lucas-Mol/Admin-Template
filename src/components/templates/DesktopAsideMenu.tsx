import Logo from "./Logo";
import MenuList from "./MenuList";

export default function DesktopAsideMenu() {
    return (
        <>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <MenuList />
        </>
    )
}