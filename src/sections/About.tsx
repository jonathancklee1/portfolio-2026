import { useState } from "react";
import ExperienceDetails from "../components/experiences/ExperienceDetails";
import ExperiencesBlock from "../components/experiences/ExperiencesBlock";
import SectionHeader from "../components/SectionHeader";

function About() {
    const [isExpandedDetails, setIsExpandedDetails] = useState(false);
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState<
        number | null
    >(null);
    console.log("selectedExperienceIndex", selectedExperienceIndex);
    return (
        <section className="flex flex-col gap-8 lg:gap-12" id="about">
            <SectionHeader text="About Me" />
            <p>
                I enjoy the process of creating solutions to real life problems
                and developing clean UIs with a keen eye for detail.
            </p>

            <h3 className="mt-6 text-2xl font-bold">Experience & Education</h3>
            <div className="flex gap-16">
                <ExperiencesBlock
                    isExpandedDetails={isExpandedDetails}
                    setIsExpandedDetails={setIsExpandedDetails}
                    selectedExperienceIndex={selectedExperienceIndex}
                    setSelectedExperienceIndex={setSelectedExperienceIndex}
                />
                <ExperienceDetails
                    isExpandedDetails={isExpandedDetails}
                    selectedIndex={selectedExperienceIndex}
                />
            </div>
        </section>
    );
}

export default About;
