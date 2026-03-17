import type { Experience } from "../utils/types";

function ExperiencesCard({
    title,
    company,
    description,
    image,
}: Omit<Experience, "duration">) {
    const cardClasses =
        company === "Stockland"
            ? "border-[color:var(--color-stockland)] bg-[color:var(--color-stockland)] shadow-[0_0_30px_var(--color-stockland)]"
            : "border-[color:var(--color-unsw)] bg-[color:var(--color-unsw)]/90 shadow-[0_0_30px_var(--color-unsw)] text-black";
    const logoClasses =
        company === "Stockland"
            ? " bg-[color:var(--color-stockland)/0.15] shadow-[0_0_30px_var(--color-stockland)]"
            : "bg-[color:var(--color-unsw)/0.15] shadow-[0_0_30px_var(--color-unsw)]";

    return (
        <div className="from-card to-background/95 text-text flex flex-col gap-10 bg-linear-to-r p-4 pt-16">
            <div
                className={`glass ${cardClasses} relative rounded-xl border-2 p-6 pt-16 backdrop-blur-md backdrop-filter`}
            >
                {/* Company logo */}
                <div
                    className={`${logoClasses} absolute top-0 right-1/2 size-20 translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-2xl`}
                >
                    <img src={image} alt={`logo of ${company}`} />
                </div>
                <h3 className="text-center text-2xl font-bold">{title}</h3>
                <p className="text-md mt-6">{description}</p>
            </div>
        </div>
    );
}

export default ExperiencesCard;
