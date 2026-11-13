export default function Hero() {
    return (
        <div className="px-40 py-28">
            <div className="flex flex-col items-center space-y-3">
                <h1 className="font-primary text-center max-w-210 text-primary text-[64px] leading-17 font-semibold tracking-tight">
                    A place to discover stories and share your ideas.
                </h1>
                <p className="font-primary text-center max-w-150 text-zinc-900 text-base font-normal">
                    Explore stories that inspire new ideas and perspectives.
                    Share your experiences and connect with others through the
                    power of writing.
                </p>
            </div>
            <div className="mt-9 space-x-4 flex justify-center">
                <button className="font-primary text-white bg-primary text-[15px] hover:bg-zinc-800 cursor-pointer px-6 py-3 rounded-2xl">
                    Explore
                </button>
                <button className="font-primary text-primary bg-white text-[15px] border border-zinc-200 cursor-pointer px-6 py-3 rounded-2xl">
                    Create story
                </button>
            </div>
        </div>
    );
}
