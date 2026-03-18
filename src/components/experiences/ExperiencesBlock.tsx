import { EXPERIENCES } from "../../data/contants";
import ChevronRight from "../../assets/icons/chevron-right.svg?react";
import { useRef, useState } from "react";
import Modal from "../Modal";
import ExperiencesCard from "./ExperiencesCard";
import type { Experience } from "../../utils/types";
import { isMobile } from "../../utils/isMobile";
import { flushSync } from "react-dom";

function ExperiencesBlock({
    isExpandedDetails,
    setIsExpandedDetails,
    selectedExperienceIndex,
    setSelectedExperienceIndex,
}: {
    isExpandedDetails: boolean;
    setIsExpandedDetails: (value: boolean) => void;
    selectedExperienceIndex: number | null;
    setSelectedExperienceIndex: (value: number | null) => void;
}) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [selectedExperience, setSelectedExperience] =
        useState<Experience | null>(null);

    const openModal = (experience: Experience) => {
        setSelectedExperience(experience);
        modalRef.current?.showModal();
    };
    const timelineLineStyle =
        "before:absolute before:top-15 before:left-7 before:h-35 before:w-2 before:bg-white before:shadow-xl before:content-[''] before:shadow-white";

    function startCardTransition() {
        if (!document.startViewTransition) {
            setIsExpandedDetails(true);
            return;
        }
        if (isExpandedDetails) {
            document.startViewTransition?.(() => {
                console.log("Transition started");
                flushSync(() => {
                    setIsExpandedDetails(false);
                });
            });
        }
        document.startViewTransition?.(() => {
            console.log("Transition started");
            flushSync(() => {
                setIsExpandedDetails(true);
            });
        });
    }
    console.log("isExpandedDetails", isExpandedDetails);
    return (
        <>
            <ul className="mx-auto flex w-fit shrink-0 flex-col lg:mx-0">
                {EXPERIENCES.map((experience, index) => (
                    <li
                        key={index}
                        className={`relative flex gap-6 pb-16 lg:justify-start ${index !== EXPERIENCES.length - 1 && timelineLineStyle}`}
                    >
                        <div
                            className={`size-16 shrink-0 overflow-hidden rounded-full shadow-2xl ${experience.company === "Stockland" ? "shadow-stockland bg-stockland" : "shadow-unsw bg-unsw"}`}
                        >
                            <img
                                src={experience.image}
                                alt={`logo of ${experience.company}`}
                                className="aspect-square"
                            />
                        </div>
                        <div
                            className={`from-card border-tertiary ${experience.company === "Stockland" ? "to-stockland/50" : "to-unsw/50"} flex cursor-pointer flex-col gap-2 rounded-lg border bg-radial-[at_25%_25%] to-75% p-4 backdrop-blur-3xl ${isExpandedDetails && index === selectedExperienceIndex ? "invisible" : "visible"}`}
                            style={{
                                viewTransitionName: !isExpandedDetails
                                    ? `experience-card-transition-${index}`
                                    : "none",
                            }}
                            onClick={() => {
                                if (isMobile()) {
                                    openModal(experience);
                                } else {
                                    startCardTransition();
                                    setSelectedExperienceIndex(index);
                                }
                            }}
                        >
                            <h3 className="text-xl font-bold">
                                {experience.title}
                            </h3>
                            <p className="text-lg font-semibold">
                                {experience.company}
                            </p>
                            <div className="flex items-center justify-between">
                                <p className="text-md">{experience.duration}</p>
                                <ChevronRight
                                    className="lg:hidden"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Modal
                dialogRef={modalRef}
                additionalClasses="max-w-[500px] lg:hidden"
            >
                {selectedExperience && (
                    <ExperiencesCard
                        description={selectedExperience.description}
                        company={selectedExperience.company}
                        title={selectedExperience.title}
                        image={selectedExperience.image}
                    />
                )}
            </Modal>
        </>
    );
}

export default ExperiencesBlock;
