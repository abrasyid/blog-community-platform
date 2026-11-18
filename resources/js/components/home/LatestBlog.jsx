export default function LatestBlog() {
    return (
        <div className="px-40 mt-32">
            <div className="flex justify-between">
                <div className="-space-y-0.5">
                    <h2 className="font-primary text-primary text-[40px] font-semibold tracking-tight">
                        What's new this week.
                    </h2>
                    <p className="font-primary text-zinc-600 text-base font-normal">
                        The newest stories to keep you inspired.
                    </p>
                </div>
                <div className="self-center">
                    <button className="inline-flex font-primary text-primary bg-white border border-zinc-200 group transition-colors duration-500 hover:text-white hover:bg-primary hover:border-primary text-sm font-medium px-5 py-2.5 gap-1 items-center rounded-xl cursor-pointer">
                        See the latest
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
            <div className="mt-10 grid grid-cols-4 gap-x-7">
                <div className="space-y-4">
                    <div className="relative">
                        <img
                            src="/assets/blogs/branding-business.jpg"
                            alt=""
                            className="w-full h-92 object-cover rounded-[14px]"
                        />
                        <span className="absolute left-3 top-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-1 font-primary text-xs font-medium text-white">
                            Business
                        </span>
                    </div>
                    <div>
                        <h3 className="font-primary text-primary text-[22px] font-semibold tracking-tight leading-7 line-clamp-2">
                            The power of branding in modern business
                        </h3>
                        <div className="mt-3 flex items-center">
                            <img
                                src="/assets/profile/profile-1.webp"
                                alt=""
                                className="w-6 h-6 rounded-full object-cover"
                            />
                            <p className="ml-2 font-primary text-primary text-[13px] font-medium leading-4.25">
                                Daniel Morgan
                            </p>
                            <span className="mx-2 font-primary text-zinc-400">
                                •
                            </span>
                            <p className="font-primary text-zinc-600 text-[13px] font-normal leading-4.25">
                                Nov 17, 2026
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative">
                        <img
                            src="/assets/blogs/build-website.jpg"
                            alt=""
                            className="w-full h-92 object-cover rounded-[14px]"
                        />
                        <span className="absolute left-3 top-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-1 font-primary text-xs font-medium text-white">
                            Technology
                        </span>
                    </div>
                    <div>
                        <h3 className="font-primary text-primary text-[22px] font-semibold tracking-tight leading-7 line-clamp-2">
                            What makes a great website experience
                        </h3>
                        <div className="mt-3 flex items-center">
                            <img
                                src="/assets/profile/profile-5.jpg"
                                alt=""
                                className="w-6 h-6 rounded-full object-cover"
                            />
                            <p className="ml-2 font-primary text-primary text-[13px] font-medium leading-4.25">
                                James Carter
                            </p>
                            <span className="mx-2 font-primary text-zinc-400">
                                •
                            </span>
                            <p className="font-primary text-zinc-600 text-[13px] font-normal leading-4.25">
                                Nov 16, 2026
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative">
                        <img
                            src="/assets/blogs/little-things.jpg"
                            alt=""
                            className="w-full h-92 object-cover rounded-[14px]"
                        />
                        <span className="absolute left-3 top-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-1 font-primary text-xs font-medium text-white">
                            Lifestyle
                        </span>
                    </div>
                    <div>
                        <h3 className="font-primary text-primary text-[22px] font-semibold tracking-tight leading-7 line-clamp-2">
                            Finding joy in the little things
                        </h3>
                        <div className="mt-3 flex items-center">
                            <img
                                src="/assets/profile/profile-6.jpg"
                                alt=""
                                className="w-6 h-6 rounded-full object-cover"
                            />
                            <p className="ml-2 font-primary text-primary text-[13px] font-medium leading-4.25">
                                Sophia Williams
                            </p>
                            <span className="mx-2 font-primary text-zinc-400">
                                •
                            </span>
                            <p className="font-primary text-zinc-600 text-[13px] font-normal leading-4.25">
                                Nov 15, 2026
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative">
                        <img
                            src="/assets/blogs/human-relationship.jpg"
                            alt=""
                            className="w-full h-92 object-cover rounded-[14px]"
                        />
                        <span className="absolute left-3 top-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-1 font-primary text-xs font-medium text-white">
                            Social
                        </span>
                    </div>
                    <div>
                        <h3 className="font-primary text-primary text-[22px] font-semibold tracking-tight leading-7 line-clamp-2">
                            The importance of meaningful human connections
                        </h3>
                        <div className="mt-3 flex items-center">
                            <img
                                src="/assets/profile/profile-4.jpg"
                                alt=""
                                className="w-6 h-6 rounded-full object-cover"
                            />
                            <p className="ml-2 font-primary text-primary text-[13px] font-medium leading-4.25">
                                Maya Anderson
                            </p>
                            <span className="mx-2 font-primary text-zinc-400">
                                •
                            </span>
                            <p className="font-primary text-zinc-600 text-[13px] font-normal leading-4.25">
                                Nov 14, 2026
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
