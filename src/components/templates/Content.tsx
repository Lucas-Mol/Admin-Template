import { channel } from "diagnostics_channel"

interface ContentProps {
    children?: any
}

export default function Content({children}: ContentProps) {
    return (
        <div className={`
            flex flex-col mt-7 mx-3 md:mx-5
        `}>
            {children}    
        </div>
    )

}