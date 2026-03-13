function Hero() {
    return (
        <section className="flex h-[calc(100vh-76px)] flex-col justify-center gap-8 md:flex-row md:items-center lg:gap-36">
            <div className="">
                <h1 className="text-4xl font-bold md:text-5xl">
                    Hi, I'm <span className="">Jonathan Lee</span>
                </h1>
                <h2 className="mt-2 text-3xl font-bold text-(--color-secondary) md:text-3xl">
                    Front-end Developer
                </h2>
                <p className="mt-4 max-w-125 text-(--color-text-secondary) md:text-xl">
                    I’m currently working as a junior front-end developer at{" "}
                    <a
                        href="https://www.stockland.com.au/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="font-bold text-(--color-stockland)">
                            Stockland
                        </span>
                    </a>{" "}
                    with 3 years of experience.
                </p>
                <div className="mt-12 flex gap-4">{/* Logos */}</div>
            </div>
            <div className="size-64 bg-(--color-stockland)">
                {/* <Canvas /> */}
            </div>
        </section>
    );
}

export default Hero;
