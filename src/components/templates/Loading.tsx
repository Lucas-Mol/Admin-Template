interface LoadingProps {
    className?: string
}

export default function Loading({className}: LoadingProps) {
    return (
        <div className={`
            flex justify-center items-center h-screen ${className}
        `}>
            <div className="loadingio-spinner-eclipse-gu0h73cwoe">
                <div className="ldio-cut9xl3iug">
                    <div></div>
                </div>
            </div>
        </div>
    )
}