export default function Subscribe() {
    return (
        <div className="px-40 mt-40 justify-items-center">
            <div className="border-t border-zinc-200 relative h-180 w-full">
                <img
                    src="/assets/blogs/subscribe.svg"
                    alt=""
                    className="w-full h-full"
                />
                <div className="absolute inset-x-0 top-24 flex flex-col items-center justify-center">
                    <div className="space-y-4">
                        <h2 className="font-primary text-primary text-5xl w-200 mx-auto text-center font-bold tracking-tight leading-14">
                            Subscribe our newslatter and Stay updated with fresh
                            ideas
                        </h2>
                        <p className="font-primary text-zinc-600 text-base font-normal text-center">
                            Get the latest stories and insigths delivered
                            straight to your inbox.
                        </p>
                    </div>
                    <div className="mt-20 flex">
                        <input
                            type="text"
                            placeholder="Your email address"
                            className="font-primary text-primary placeholder:text-primary/45 rounded-xl border border-[#E7ECF2] bg-[#FAFBFD] px-3.75 py-2.75 w-100 transition-all duration-200 focus:border-zinc-400 focus:ring-3 focus:ring-zinc-200 focus:outline-none"
                        />
                        <button className="ml-4 font-primary text-white bg-primary text-[15px] font-medium hover:bg-zinc-800 cursor-pointer px-6 py-2.75 rounded-2xl">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
