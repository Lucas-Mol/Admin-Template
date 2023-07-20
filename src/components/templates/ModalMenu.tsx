import { HomeIcon, SettingsIcon, BellIcon, LogOutIcon } from "../icons";
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";

export default function ModalMenu() {
    return (
        <div className="
            absolute
            z-20 w-auto h-auto
            rounded-b-md
            bg-gray-200 text-gray-700
            dark:bg-gray-900 dark:text-gray-200
            border-r-2 border-b-2
            border-gray-200 dark:border-gray-900
            animate-fadeDown
            ">
            <MenuList />
        </div>
    )
}