import Github from "../assets/icons/github.svg?react";
import Email from "../assets/icons/email.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

function Hero() {
    const containerRef = useRef(null);
    gsap.registerPlugin(SplitText);
    useGSAP(
        () => {
            const split = new SplitText(".name-split", { type: "chars" });

            split.chars.forEach((char) => {
                char.addEventListener("mouseenter", () => {
                    gsap.to(char, {
                        y: -10,
                        color: "var(--color-secondary)",
                        duration: 0.3,
                        ease: "power2.out",
                    });
                });

                char.addEventListener("mouseleave", () => {
                    gsap.to(char, {
                        y: 0,
                        color: "inherit",
                        duration: 0.3,
                        ease: "power2.in",
                    });
                });
            });
        },
        { scope: containerRef },
    );
    return (
        <section className="flex h-[calc(100vh-76px)] flex-col justify-center gap-8 md:flex-row md:items-center lg:gap-36">
            <div className="tracking-wide" ref={containerRef}>
                <span className="text-2xl font-medium md:text-4xl">
                    Hi, I'm
                </span>
                <h1 className="mt-1 text-4xl font-bold md:text-6xl">
                    <span className="name-split tracking-wider">
                        Jonathan Lee
                    </span>
                </h1>
                <h2 className="mt-2 text-3xl font-bold text-(--color-secondary) md:text-3xl">
                    Front-end Developer
                </h2>
                <p className="mt-4 max-w-125 text-(--color-text-secondary) md:text-2xl">
                    I’m currently working as a Junior Front-end Developer at{" "}
                    <a
                        href="https://www.stockland.com.au/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-stockland translate-y-1 p-1 font-bold transition-all hover:rounded-lg hover:bg-[#286bd7] hover:text-white">
                            Stockland
                        </span>
                    </a>{" "}
                    with 3 years of experience.
                </p>
                <div className="mt-6 flex items-center gap-4 lg:mt-10">
                    <a
                        href="https://github.com/jonathancklee1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github
                            height={"32px"}
                            width={"32px"}
                            className="fill-secondary transition-colors hover:fill-white"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jonathan-lee-97bbb9207/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin
                            height={"36px"}
                            width={"36px"}
                            className="fill-secondary transition-colors hover:fill-[#0077B5]"
                        />
                    </a>
                    <a
                        href="mailto:jonathancklee@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Email
                            height={"32px"}
                            width={"32px"}
                            className="fill-secondary transition-colors hover:fill-[#EA4335]"
                        />
                    </a>
                </div>
            </div>
            <div className="bg-stockland size-64">{/* <Canvas /> */}</div>
        </section>
    );
}

export default Hero;
