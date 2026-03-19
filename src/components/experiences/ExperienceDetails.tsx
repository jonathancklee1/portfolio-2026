import type { Experience } from "../../utils/types";

function ExperienceDetails({
    selectedExperience,
}: {
    selectedExperience: Experience | null;
}) {
    const cardClasses =
        selectedExperience?.company === "Stockland"
            ? "border-[color:var(--color-stockland)] shadow-[0_0_30px_var(--color-stockland)]"
            : "border-[color:var(--color-unsw)]  shadow-[0_0_30px_var(--color-unsw)] text-black";

    return (
        <div
            className={`${selectedExperience?.company === "Stockland" ? "to-stockland/50" : "to-unsw/80"} text-text from-card hidden h-fit w-full flex-col gap-6 rounded-2xl bg-linear-to-b to-75% p-10 py-16 ring-1 ring-white lg:flex ${cardClasses} `}
        >
            <h3 className="text-center text-2xl font-bold">
                {selectedExperience?.title}
            </h3>
            <ul className="mt-6 text-xl">
                {selectedExperience?.description.map((line, index) => (
                    <div
                        className="rounded-2xl bg-black/50 p-8 shadow-2xl backdrop-blur-2xl"
                        key={index}
                    >
                        <li className="list-inside list-disc gap-2">{line}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceDetails;
