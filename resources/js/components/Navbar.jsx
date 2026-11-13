export default function Navbar() {
    return (
        <header className="px-40 py-4">
            <nav className="grid grid-cols-3 items-center">
                <div>
                    <a
                        href=""
                        className="font-primary text-primary text-[26px] font-bold tracking-tight"
                    >
                        Letter.
                    </a>
                </div>
                <div className="space-x-9 justify-self-center">
                    <a
                        href=""
                        className="font-primary text-primary text-[15px] font-normal"
                    >
                        Blog
                    </a>
                    <a
                        href=""
                        className="font-primary text-primary text-[15px] font-normal"
                    >
                        Latest
                    </a>
                    <a
                        href=""
                        className="font-primary text-primary text-[15px] font-normal"
                    >
                        Popular
                    </a>
                    <a
                        href=""
                        className="font-primary text-primary text-[15px] font-normal"
                    >
                        Tag
                    </a>
                </div>
                <div className="space-x-3 justify-self-end">
                    <button className="font-primary text-primary text-[15px] cursor-pointer">
                        Log in
                    </button>
                    <button className="font-primary inline-flex text-white text-[15px] cursor-pointer bg-primary group transition hover:bg-zinc-800 items-center gap-1 px-4 py-2.5 rounded-lg">
                        Sign up
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
            </nav>
        </header>
    );
}
