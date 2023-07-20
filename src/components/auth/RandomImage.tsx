export default function RandomImage() {
    return (
        <div className="hidden md:block md:w-1/2 lg:w-2/3">
            <img 
                src="https://source.unsplash.com/random" 
                alt="Random image" 
                className="h-screen w-full object-cover"/>
        </div>
    )
}