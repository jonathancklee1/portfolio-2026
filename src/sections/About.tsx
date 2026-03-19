import { useState } from "react";
import ExperiencesBlock from "../components/experiences/ExperiencesBlock";
import SectionHeader from "../components/SectionHeader";

function About() {
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState<
        number | null
    >(null);
    console.log("selectedExperienceIndex", selectedExperienceIndex);
    return (
        <section className="flex flex-col gap-8 lg:gap-12" id="about">
            <SectionHeader text="About Me" />
            <div className="glassmorphism rounded-4xl p-4 lg:p-8">
                <p className="text-lg lg:text-xl">
                    I enjoy the process of creating solutions to real life
                    problems and developing clean UIs with a keen eye for
                    detail.
                </p>
            </div>

            <h3 className="mt-6 text-2xl font-bold">Experience & Education</h3>

            <ExperiencesBlock
                setSelectedExperienceIndex={setSelectedExperienceIndex}
            />
        </section>
    );
}

export default About;
