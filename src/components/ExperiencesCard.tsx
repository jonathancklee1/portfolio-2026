import type { Experience } from "../utils/types";

function ExperiencesCard({
    title,
    company,
    description,
}: Omit<Experience, "duration">) {
    return (
        <div className="flex flex-col gap-10 bg-(--color-card) p-4 pt-16 text-(--color-text)">
            <div className="glass relative rounded-xl border-2 border-(--color-stockland) bg-(--color-stockland)/20 p-6 pt-16 backdrop-blur-md backdrop-filter">
                {/* Company logo */}
                <div className="shadow-stockland absolute top-0 right-1/2 size-20 translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-secondary) shadow-2xl"></div>
                <h3 className="text-center text-2xl font-bold">{title}</h3>
                <p className="text-md mt-6">{description}</p>
            </div>
        </div>
    );
}

export default ExperiencesCard;
