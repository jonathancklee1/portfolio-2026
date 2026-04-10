import SectionHeader from "../components/SectionHeader";
import { TechRow } from "../components/technologies/TechRow";
import { TECH_STACK } from "../data/contants";
function Technologies() {
    function getPillColour(index: number) {
        switch (index) {
            case 0:
                return "bg-[#90f3ff]";
            case 1:
                return "bg-[#68edc6]";
            case 2:
                return "bg-[#90bede]";
            case 3:
                return "bg-[#dffdff]";
            case 4:
                return "bg-[#e5e1ee]";
            default:
                return "bg-gray-500";
        }
    }
    return (
        <section className="flex flex-col gap-8 lg:gap-12" id="tech">
            <SectionHeader text="Technologies I used" />
            <div className="flex flex-col gap-12 text-white">
                {TECH_STACK.map((techCategory, index) => (
                    <TechRow
                        key={techCategory.category}
                        title={techCategory.category}
                        technologies={techCategory.items}
                        pillColour={getPillColour(index)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Technologies;
