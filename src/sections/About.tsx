import ExperiencesBlock from "../components/experiences/ExperiencesBlock";
import SectionHeader from "../components/SectionHeader";
import SpotifyBlock from "../components/SpotifyBlock";
import Quotes from "../assets/icons/quotes.svg?react";

function About() {
    return (
        <section className="flex flex-col gap-8 lg:gap-12" id="about">
            <SectionHeader text="About Me" />
            <div className="grid gap-10 lg:gap-12">
                <div className="relative px-4 py-10 md:px-16 md:py-0">
                    <Quotes className="absolute -top-3 left-0 h-12 w-12 rotate-188 md:top-0" />
                    <p className="text-center text-lg lg:text-xl">
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
                    <Quotes className="absolute right-0 bottom-3 h-12 w-12 rotate-6 md:bottom-0" />
                    {/* <p className="text-center text-3xl">- Me, 2026</p> */}
                </div>
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-stretch">
                    <div className="glassmorphism flex w-fit items-center gap-4 rounded-2xl p-4 lg:p-6">
                        <div className="p-2">
                            <div className="green-dot"></div>
                        </div>
                        <p className="text-lg font-bold lg:text-xl">
                            Currently learning 3D web development
                        </p>
                    </div>
                    <div className="glassmorphism flex w-full max-w-[500px] items-center gap-2 rounded-2xl p-4 lg:p-6">
                        <SpotifyBlock />
                    </div>
                </div>
            </div>

            <h3 className="mt-6 text-2xl font-bold">Experience & Education</h3>
            <ExperiencesBlock />
        </section>
    );
}

export default About;
