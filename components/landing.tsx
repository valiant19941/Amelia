export default function Landing() {
    return (
       <div className=" relative h-screen w-screen overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/4.mp4" autoPlay loop muted />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col justify-center items-center p-4">
            <h1 className="text-gray-100 text-5xl font-bold mb-4">Merry <span className="text-red-900"> Christmas </span> To Everyone</h1>
            <h2 className="text-white rounded-3xl text-4xl font-bold mb-4">Wishing you a joyous holiday season filled with love and happiness. </h2>
            <button className="border bg-red-900">Get Started</button>
            </div>
       </div>
    )
}