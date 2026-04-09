import ExperiencesBlock from "../components/experiences/ExperiencesBlock";
import SectionHeader from "../components/SectionHeader";
import MusicBlock from "../components/MusicBlock";
import Quotes from "../assets/icons/quotes.svg?react";
import { isMobile } from "../utils/isMobile";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function About() {
    const aboutRef = useRef(null);
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-quote",
                    start: "top 90%",
                },
            });

            tl.from(".about-quote", {
                autoAlpha: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
            })
                .from(".quote-left", {
                    autoAlpha: 0,
                    x: -40,
                    duration: 1,
                    ease: "power3.out",
                })
                .from(
                    ".quote-right",
                    {
                        autoAlpha: 0,
                        x: 40,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "<",
                );

            gsap.from(".sub-heading", {
                autoAlpha: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".sub-heading",
                    start: "top 90%",
                },
            });
            gsap.from(".currently-learning-container", {
                autoAlpha: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".currently-learning-container",
                    start: "top 90%",
                },
            });
            gsap.from(".music-block", {
                autoAlpha: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".music-block",
                    start: "top 90%",
                },
            });
        },
        { scope: aboutRef },
    );
    return (
        <section
            className="flex flex-col gap-8 lg:gap-12"
            id="about"
            ref={aboutRef}
        >
            <SectionHeader text="About Me" />
            <div className="grid gap-10 lg:gap-12">
                <div className="relative px-4 py-10 md:px-16 md:py-0">
                    <Quotes
                        className={
                            "quote-left absolute -top-3 left-0 " +
                            (isMobile() ? "h-8 w-8" : "h-12 w-12") +
                            " rotate-188 md:top-0"
                        }
                    />
                    <p className="about-quote text-center text-lg lg:text-xl">
                        I’m a junior front‑end developer who loves turning ideas
                        into clean, responsive, and genuinely enjoyable web
                        experiences. Whether it’s refining UI details, improving
                        performance, or learning the next cool framework, I’m
                        always chasing that “oh, that’s nice” moment in a
                        project.
                        <br />
                        <br />
                        When I’m not coding, I’m usually exploring design trends
                        or tinkering with side projects that help me grow as a
                        developer.
                    </p>
                    <Quotes
                        className={
                            "quote-right absolute right-0 bottom-3 " +
                            (isMobile() ? "h-8 w-8" : "h-12 w-12") +
                            " rotate-6 md:bottom-0"
                        }
                    />
                </div>
                <div className="currently-learning-container flex flex-col items-center justify-center gap-6 md:flex-row md:items-stretch">
                    <div className="glassmorphism flex w-fit items-center gap-4 rounded-2xl p-4 lg:px-6">
                        <div className="p-2">
                            <div className="green-dot"></div>
                        </div>
                        <p className="text-md font-bold lg:text-lg">
                            Currently learning 3D web development
                        </p>
                    </div>

                    <MusicBlock />
                </div>
            </div>

            <h3 className="sub-heading mt-6 text-2xl font-bold">
                Experience & Education
            </h3>
            <ExperiencesBlock />
        </section>
    );
}

export default About;
