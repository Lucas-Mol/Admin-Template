import useAuthContext from "@/data/hook/useAuthContext";
import Link from "next/link";

interface UserAvatarProps {
    className?: string
}

export default function UserAvatar({className}: UserAvatarProps) {
    const { user } = useAuthContext()

    return (
        <Link href="/profile">
            <img src={user?.profileUrl ?? '/images/avatar.svg'} 
            alt="User avatar" 
            className={`h-10 w-10 rounded-full cursor-pointer ${className}`}/>
        </Link>
    )
}