import { channel } from "diagnostics_channel"

interface ContentProps {
    children?: any
}

export default function Content({children}: ContentProps) {
    return (
        <div className={`
            flex flex-col mt-7
        `}>
            {children}    
        </div>
    )

}