import Link from "next/link"

interface MenuItemProps {
    url?: string
    text: string
    icon: any
    onClickAction?: (event: any) => void
    className?: string
}

export default function MenuItem({url, text, icon, onClickAction, className}: MenuItemProps) {
    function renderLink() {
        return (
            <li className={`
            hover:bg-gray-300
            dark:hover:bg-gray-800
            `}>
                <Link 
                className={`flex flex-col justify-center items-center h-20 w-20
                text-gray-700 
                dark:text-gray-200
                ${className}`}
                href={url!}>
                    {icon}
                    <span className="text-xs font-light">
                        {text}
                    </span>
                </Link>
            </li>
        )
    }

    function renderOnClick() {
        return (
            <li onClick={onClickAction} className={`hover:bg-gray-100 flex flex-col justify-center items-center h-20 w-20 cursor-pointer text-gray-600 ${className}`}>
                {icon}
                <span className="text-xs font-light">
                    {text}
                </span>
            </li>
        )
    }

    return (
        url ? renderLink() : renderOnClick()
    )
}