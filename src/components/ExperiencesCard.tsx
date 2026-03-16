import type { Experience } from "../utils/types";

function ExperiencesCard({
    title,
    company,
    description,
    image,
}: Omit<Experience, "duration">) {
    const companyColor = company === "Stockland" ? "stockland" : "unsw";
    return (
        <div className="from-card to-background/95 text-text flex flex-col gap-10 bg-linear-to-r p-4 pt-16">
            <div
                className={`glass border-${companyColor} bg-${companyColor}/15 relative rounded-xl border-2 p-6 pt-16 backdrop-blur-md backdrop-filter`}
            >
                {/* Company logo */}
                <div
                    className={`shadow-${companyColor} bg-${companyColor} absolute top-0 right-1/2 size-20 translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-2xl`}
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
