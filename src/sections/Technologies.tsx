import SectionHeader from "../components/SectionHeader";
import { TechRow } from "../components/technologies/TechRow";

function Technologies() {
    return (
        <section className="flex flex-col gap-8 lg:gap-12" id="tech">
            <SectionHeader text="Technologies I used" />
            <div className="flex gap-8">
                <TechRow
                    title="Languages"
                    technologies={[
                        "Typescript",
                        "Javascript",
                        "Python",
                        "C++",
                        "Java",
                        "C#",
                    ]}
                />
            </div>
        </section>
    );
}

export default Technologies;
