import ExperiencesBlock from "../components/ExperiencesBlock";
import SectionHeader from "../components/SectionHeader";

function About() {
    return (
        <section className="flex flex-col gap-8 lg:gap-12" id="about">
            <SectionHeader text="About Me" />
            <p>
                I enjoy the process of creating solutions to real life problems
                and developing clean UIs with a keen eye for detail.
            </p>

            <h3 className="mt-6 text-2xl font-bold">Experience & Education</h3>
            <ExperiencesBlock />
        </section>
    );
}

export default About;
