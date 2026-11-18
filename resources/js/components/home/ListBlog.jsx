export default function ListBlog() {
    return (
        <div className="px-40 mt-12">
            <div className="-space-y-0.5">
                <h2 className="font-primary text-primary text-[40px] font-semibold tracking-tight">
                    Explore our stories.
                </h2>
                <p className="font-primary text-zinc-600 text-16px font-normal">
                    Discover inspiring stories and fresh perspectives from our
                    community.
                </p>
            </div>
            <div className="mt-12 space-y-10">
                <div className="space-x-2">
                    <button className="font-primary text-white bg-primary transition duration-200 hover:bg-zinc-800 text-[13px] font-medium px-4 py-2 cursor-pointer rounded-full">
                        All stories
                    </button>
                    <button className="font-primary text-primary bg-white text-[13px] font-medium px-4 py-2 border border-zinc-200 cursor-pointer rounded-full">
                        Technology
                    </button>
                    <button className="font-primary text-primary bg-white text-[13px] font-medium px-4 py-2 border border-zinc-200 cursor-pointer rounded-full">
                        Career
                    </button>
                    <button className="font-primary text-primary bg-white text-[13px] font-medium px-4 py-2 border border-zinc-200 cursor-pointer rounded-full">
                        Lifestyle
                    </button>
                    <button className="font-primary text-primary bg-white text-[13px] font-medium px-4 py-2 border border-zinc-200 cursor-pointer rounded-full">
                        Culture
                    </button>
                    <button className="font-primary text-primary bg-white text-[13px] font-medium px-4 py-2 border border-zinc-200 cursor-pointer rounded-full">
                        Business
                    </button>
                    <button className="font-primary text-primary bg-white text-[13px] font-medium px-4 py-2 border border-zinc-200 cursor-pointer rounded-full">
                        Social
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-x-7 gap-y-9">
                    <div className="space-y-4">
                        <div className="relative">
                            <img
                                src="/assets/blogs/career.jpg"
                                alt=""
                                className="w-full h-64 object-cover rounded-[14px]"
                            />
                            <span className="absolute left-3 top-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-1 font-primary text-xs font-medium text-white">
                                Career
                            </span>
                        </div>
                        <div>
                            <h3 className="font-primary text-primary text-[22px] font-semibold tracking-tight leading-7">
                                Finding your place in a competitive job market
                            </h3>
                            <p className="mt-2 font-primary text-zinc-600 text-sm font-normal line-clamp-2 leading-5">
                                Learn how to stand out in today's job market by
                                building valuable skill and gaining meaningful
                                experience.
                            </p>
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
                                    Nov 12, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative">
                            <img
                                src="/assets/blogs/technology.jpg"
                                alt=""
                                className="w-full h-64 object-cover rounded-[14px]"
                            />
                            <span className="absolute left-3 top-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-1 font-primary text-xs font-medium text-white">
                                Technology
                            </span>
                        </div>
                        <div>
                            <h3 className="font-primary text-primary text-[22px] font-semibold tracking-tight leading-7">
                                Technology that changes everything
                            </h3>
                            <p className="mt-2 font-primary text-zinc-600 text-sm font-normal line-clamp-2 leading-5">
                                Explore how technological advancements are
                                transforming the way we live, work, and connect
                                with the world around us.
                            </p>
                            <div className="mt-3 flex items-center">
                                <img
                                    src="/assets/profile/profile-2.webp"
                                    alt=""
                                    className="w-6 h-6 rounded-full object-cover"
                                />
                                <p className="ml-2 font-primary text-primary text-[13px] font-medium leading-4.25">
                                    Ethan Walker
                                </p>
                                <span className="mx-2 font-primary text-zinc-400">
                                    •
                                </span>
                                <p className="font-primary text-zinc-600 text-[13px] font-normal leading-4.25">
                                    Nov 8, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative">
                            <img
                                src="/assets/blogs/lifestyle.jpg"
                                alt=""
                                className="w-full h-64 object-cover rounded-[14px]"
                            />
                            <span className="absolute left-3 top-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-1 font-primary text-xs font-medium text-white">
                                Lifestyle
                            </span>
                        </div>
                        <div>
                            <h3 className="font-primary text-primary text-[22px] font-semibold tracking-tight leading-7">
                                A better life starts with small habits
                            </h3>
                            <p className="mt-2 font-primary text-zinc-600 text-sm font-normal line-clamp-2 leading-5">
                                Discover how simple daily habits can improve
                                your well-being, create a healthier routine, and
                                bring more balance to your everyday life.
                            </p>
                            <div className="mt-3 flex items-center">
                                <img
                                    src="/assets/profile/profile-3.webp"
                                    alt=""
                                    className="w-6 h-6 rounded-full object-cover"
                                />
                                <p className="ml-2 font-primary text-primary text-[13px] font-medium leading-4.25">
                                    Olivia Bennett
                                </p>
                                <span className="mx-2 font-primary text-zinc-400">
                                    •
                                </span>
                                <p className="font-primary text-zinc-600 text-[13px] font-normal leading-4.25">
                                    Oct 29, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative">
                            <img
                                src="/assets/blogs/culture.jpg"
                                alt=""
                                className="w-full h-64 object-cover rounded-[14px]"
                            />
                            <span className="absolute left-3 top-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-1 font-primary text-xs font-medium text-white">
                                Culture
                            </span>
                        </div>
                        <div>
                            <h3 className="font-primary text-primary text-[22px] font-semibold tracking-tight leading-7">
                                Why cultural identity still matters to the next
                                generation
                            </h3>
                            <p className="mt-2 font-primary text-zinc-600 text-sm font-normal line-clamp-2 leading-5">
                                Understand why cultural heritage remains
                                important in shaping the identity of future
                                generations.
                            </p>
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
                                    Oct 24, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative">
                            <img
                                src="/assets/blogs/business.jpg"
                                alt=""
                                className="w-full h-64 object-cover rounded-[14px]"
                            />
                            <span className="absolute left-3 top-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-1 font-primary text-xs font-medium text-white">
                                Business
                            </span>
                        </div>
                        <div>
                            <h3 className="font-primary text-primary text-[22px] font-semibold tracking-tight leading-7">
                                Building a business from the ground up
                            </h3>
                            <p className="mt-2 font-primary text-zinc-600 text-sm font-normal line-clamp-2 leading-5">
                                Discover how a simple idea can grow into a
                                successful business through dedication and the
                                right strategy.
                            </p>
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
                                    Oct 18, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative">
                            <img
                                src="/assets/blogs/social.jpg"
                                alt=""
                                className="w-full h-64 object-cover rounded-[14px]"
                            />
                            <span className="absolute left-3 top-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-1 font-primary text-xs font-medium text-white">
                                Social
                            </span>
                        </div>
                        <div>
                            <h3 className="font-primary text-primary text-[22px] font-semibold tracking-tight leading-7">
                                How small acts of kindness can change a
                                community
                            </h3>
                            <p className="mt-2 font-primary text-zinc-600 text-sm font-normal line-clamp-2 leading-5">
                                Discover how simple acts of kindness, mutual
                                support, and collective action can create
                                meaningful changes within a community.
                            </p>
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
                                    Oct 10, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="mt-12 mx-auto block font-primary text-white bg-primary transition duration-200 hover:bg-zinc-800 text-sm font-medium px-6 py-3 cursor-pointer rounded-full">
                View all stories
            </button>
        </div>
    );
}
