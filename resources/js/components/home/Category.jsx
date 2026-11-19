export default function Category() {
    return (
        <div className="px-40 mt-30 mb-200">
            <div className="bg-[#1c1c1c] px-12 pt-14 pb-12 rounded-[28px]">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 font-primary text-[13px] font-medium tracking-wide text-white backdrop-blur-sm">
                    Explore categories
                </span>
                <div className="mt-6 flex justify-between">
                    <div className="-space-y-0.5">
                        <h2 className="font-primary text-white text-[40px] font-semibold tracking-tight">
                            Find topics that inspire.
                        </h2>
                        <p className="inline-block max-w-90 font-primary text-white/64 text-base font-normal">
                            Explore diverse topics and discover something new
                            every day.
                        </p>
                    </div>
                    <div className="self-center">
                        <button className="inline-flex font-primary text-primary bg-white group transition-colors duration-500 hover:bg-white/80 text-sm font-medium px-5 py-2.5 gap-1 items-center rounded-xl cursor-pointer">
                            Read stories
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 12h14m-6 6l6-6m-6-6l6 6"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="mt-9 grid grid-cols-3 gap-6">
                    <div className="group rounded-[20px] border border-white/6 bg-white/4 p-1.5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/6 hover:shadow-xl hover:shadow-black/30">
                        <div className="relative h-70 overflow-hidden rounded-[15px]">
                            <img
                                src="/assets/category/tag-technology.jpg"
                                alt="Technology"
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/25 to-transparent px-6 pb-5">
                                <h3 className="font-primary text-2xl font-semibold tracking-tight text-white">
                                    Technology
                                </h3>
                                <p className="mt-1 font-primary text-sm font-medium leading-5 text-white/80">
                                    Explore the world of technology.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-[20px] border border-white/6 bg-white/4 p-1.5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/6 hover:shadow-xl hover:shadow-black/30">
                        <div className="relative h-70 overflow-hidden rounded-[15px]">
                            <img
                                src="/assets/category/tag-career.jpg"
                                alt=""
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent px-6 pb-5">
                                <h3 className="font-primary text-2xl font-semibold tracking-tight text-white">
                                    Career
                                </h3>
                                <p className="mt-1 font-primary text-sm font-medium leading-5 text-white/80">
                                    Discover opportunities for professional
                                    growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-[20px] border border-white/6 bg-white/4 p-1.5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/6 hover:shadow-xl hover:shadow-black/30">
                        <div className="relative h-70 overflow-hidden rounded-[15px]">
                            <img
                                src="/assets/category/tag-lifestyle.jpg"
                                alt=""
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent px-6 pb-5">
                                <h3 className="font-primary text-2xl font-semibold tracking-tight text-white">
                                    Lifestyle
                                </h3>
                                <p className="mt-1 font-primary text-sm font-medium leading-5 text-white/80">
                                    Find inspiration for everyday living.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-[20px] border border-white/6 bg-white/4 p-1.5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/6 hover:shadow-xl hover:shadow-black/30">
                        <div className="relative h-70 overflow-hidden rounded-[15px]">
                            <img
                                src="/assets/category/tag-culture.jpg"
                                alt=""
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent px-6 pb-5">
                                <h3 className="font-primary text-2xl font-semibold tracking-tight text-white">
                                    Culture
                                </h3>
                                <p className="mt-1 font-primary text-sm font-medium leading-5 text-white/80">
                                    Explore traditions and diverse cultural
                                    perspectives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-[20px] border border-white/6 bg-white/4 p-1.5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/6 hover:shadow-xl hover:shadow-black/30">
                        <div className="relative h-70 overflow-hidden rounded-[15px]">
                            <img
                                src="/assets/category/tag-business.jpg"
                                alt=""
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent px-6 pb-5">
                                <h3 className="font-primary text-2xl font-semibold tracking-tight text-white">
                                    Business
                                </h3>
                                <p className="mt-1 font-primary text-sm font-medium leading-5 text-white/80">
                                    Ideas that shape the business world.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group rounded-[20px] border border-white/6 bg-white/4 p-1.5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/6 hover:shadow-xl hover:shadow-black/30">
                        <div className="relative h-70 overflow-hidden rounded-[15px]">
                            <img
                                src="/assets/category/tag-social.jpg"
                                alt=""
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent px-6 pb-5">
                                <h3 className="font-primary text-2xl font-semibold tracking-tight text-white">
                                    Social
                                </h3>
                                <p className="mt-1 font-primary text-sm font-medium leading-5 text-white/80">
                                    Understanding people and social issues.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
