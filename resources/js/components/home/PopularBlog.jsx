export default function PopularBlog() {
    return (
        <div className="px-40 mt-30">
            <div className="-space-y-0.5">
                <h2 className="font-primary text-primary text-[40px] font-semibold tracking-tight">
                    Popular blog.
                </h2>
                <p className="font-primary text-zinc-600 text-16px font-normal">
                    Check out the most popular reads right now.
                </p>
            </div>
            <div className="mt-10 flex flex-row space-x-6">
                <div className="relative w-3/5 overflow-hidden rounded-2xl">
                    <img
                        src="/assets/blogs/artificial-intelligence.jpg"
                        alt="Artificial intelligence"
                        className="h-full w-full object-cover"
                    />
                    <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-primary text-sm font-medium tracking-wide text-white backdrop-blur-sm">
                        Technology
                    </span>
                    <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent px-6 pb-8">
                        <h3 className="font-primary text-3xl font-semibold text-white tracking-tight leading-8">
                            How AI is reshaping the future of technology
                        </h3>
                        <p className="mt-3 font-primary text-[15px] leading-5 text-white/80">
                            Discover how artificial intelligence is changing the
                            way we work and create new possibilities across
                            industries.
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                            <p className="font-primary font-medium text-sm text-white">
                                John Frederick
                            </p>
                            <span
                                aria-hidden="true"
                                className="font-primary text-sm text-white/60"
                            >
                                •
                            </span>
                            <p className="font-primary text-sm text-white/80">
                                Nov 12, 2026
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-2/5">
                    <div className="flex space-x-4">
                        <img
                            src="/assets/blogs/web-development.jpg"
                            alt=""
                            className="w-34 h-30 object-cover rounded-2xl"
                        />
                        <div className="flex flex-col py-1">
                            <p className="font-primary text-[#6B6B66] font-medium text-sm tracking-tight">
                                Technology
                            </p>
                            <h3 className="mt-1.5 font-primary text-primary font-semibold text-lg tracking-tight leading-6">
                                The future of web development in 2027
                            </h3>
                            <div className="mt-auto flex items-center">
                                <p className="font-primary text-primary text-[13px] font-medium leading-4.25">
                                    Sebastian Michael
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
                    <div className="flex space-x-4">
                        <img
                            src="/assets/blogs/building-career.jpg"
                            alt=""
                            className="w-34 h-30 object-cover rounded-2xl"
                        />
                        <div className="flex flex-col py-1">
                            <p className="font-primary text-[#6B6B66] font-medium text-sm tracking-tight">
                                Career
                            </p>
                            <h3 className="mt-1.5 font-primary text-primary font-semibold text-lg tracking-tight leading-6">
                                Building a career in the digital era
                            </h3>
                            <div className="mt-auto flex items-center">
                                <p className="font-primary text-primary text-[13px] font-medium leading-4.25">
                                    Amelia Foster
                                </p>
                                <span className="mx-2 font-primary text-zinc-400">
                                    •
                                </span>
                                <p className="font-primary text-zinc-600 text-[13px] font-normal leading-4.25">
                                    Nov 5, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <img
                            src="/assets/blogs/local-culture.jpg"
                            alt=""
                            className="w-34 h-30 object-cover rounded-2xl"
                        />
                        <div className="flex flex-col py-1">
                            <p className="font-primary text-[#6B6B66] font-medium text-sm tracking-tight">
                                Culture
                            </p>
                            <h3 className="mt-1.5 font-primary text-primary font-semibold text-lg tracking-tight leading-6">
                                Keeping local culture alive in a modern world
                            </h3>
                            <div className="mt-auto flex items-center">
                                <p className="font-primary text-primary text-[13px] font-medium leading-4.25">
                                    Chloe Laurent
                                </p>
                                <span className="mx-2 font-primary text-zinc-400">
                                    •
                                </span>
                                <p className="font-primary text-zinc-600 text-[13px] font-normal leading-4.25">
                                    Oct 28, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <img
                            src="/assets/blogs/idea-business.jpg"
                            alt=""
                            className="w-34 h-30 object-cover rounded-2xl"
                        />
                        <div className="py-1 flex flex-col">
                            <p className="font-primary text-[#6B6B66] font-medium text-sm tracking-tight">
                                Business
                            </p>
                            <h3 className="mt-1.5 font-primary text-primary font-semibold text-lg tracking-tight leading-6">
                                From small ideas to growing business
                            </h3>
                            <div className="mt-auto flex items-center">
                                <p className="font-primary text-primary text-[13px] font-medium leading-4.25">
                                    Noah Williams
                                </p>
                                <span className="mx-2 font-primary text-zinc-400">
                                    •
                                </span>
                                <p className="font-primary text-zinc-600 text-[13px] font-normal leading-4.25">
                                    Oct 20, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
