'use client'

import useAuthContext from "@/data/hook/useAuthContext";
import { HomeIcon, SettingsIcon, BellIcon, LogOutIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuList() {
    const { logout } = useAuthContext()

    return (
        <>
            <ul className="flex-grow">
                <MenuItem url="/home" text="Home" icon={HomeIcon} />
                <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
                <MenuItem url="/notifications" text="Notifications" icon={BellIcon} />
            </ul>
            <ul>
                <MenuItem 
                    onClickAction={logout} 
                    text="Logout" 
                    icon={LogOutIcon}
                    className={`
                        text-red-600 hover:bg-red-400 hover:text-white
                        dark:text-red-400 dark:hover:text-white
                        rounded-b-lg md:rounded-none
                    `} />
            </ul>
        </>
    )
}