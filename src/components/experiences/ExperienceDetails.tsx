function ExperienceDetails({
    isExpandedDetails,
    selectedIndex,
}: {
    isExpandedDetails: boolean;
    selectedIndex: number | null;
}) {
    return (
        <div
            className={`hidden w-full rounded-2xl border-2 border-dotted border-amber-50 bg-violet-500 p-8 lg:block ${isExpandedDetails ? "visible" : "invisible"}`}
            style={{
                viewTransitionName: isExpandedDetails
                    ? `experience-card-transition-${selectedIndex}`
                    : "none",
            }}
        >
            ExperienceDetails
        </div>
    );
}

export default ExperienceDetails;
