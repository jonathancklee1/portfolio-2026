import SectionHeader from "../components/SectionHeader";
import { TechRow } from "../components/technologies/TechRow";
import { TECH_STACK } from "../data/contants";
function Technologies() {
    return (
        <section className="flex flex-col gap-8 lg:gap-12" id="tech">
            <SectionHeader text="Technologies I used" />
            <div className="flex flex-col gap-12">
                {TECH_STACK.map((techCategory) => (
                    <TechRow
                        key={techCategory.category}
                        title={techCategory.category}
                        technologies={techCategory.items}
                    />
                ))}
            </div>
        </section>
    );
}

export default Technologies;
