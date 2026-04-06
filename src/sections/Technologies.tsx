import SectionHeader from "../components/SectionHeader";
import { TechRow } from "../components/technologies/TechRow";
import { TECH_STACK } from "../data/contants";
function Technologies() {
    function getPillColour(index: number) {
        switch (index) {
            case 0:
                return "bg-blue-500";
            case 1:
                return "bg-purple-700";
            case 2:
                return "bg-green-700";
            case 3:
                return "bg-yellow-700";
            case 4:
                return "bg-red-700";
            default:
                return "bg-gray-500";
        }
    }
    return (
        <section className="flex flex-col gap-8 lg:gap-12" id="tech">
            <SectionHeader text="Technologies I used" />
            <div className="flex flex-col gap-12">
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
