import { EXPERIENCES } from "../../data/contants";
import ChevronRight from "../../assets/icons/chevron-right.svg?react";
import { useRef, useState } from "react";
import Modal from "../Modal";
import ExperiencesCard from "./ExperiencesCard";
import type { Experience } from "../../utils/types";
import { isMobile } from "../../utils/isMobile";
import ExperienceDetails from "./ExperienceDetails";

function ExperiencesBlock({
    setSelectedExperienceIndex,
}: {
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
        "before:absolute before:top-15 lg:before:top-25 before:left-7 lg:before:left-12 before:h-35 lg:before:h-40 before:w-2 lg:before:w-3 before:bg-white before:shadow-xl before:content-[''] before:shadow-white";

    return (
        <div className="flex gap-12">
            <ul className="mx-auto flex w-fit shrink-0 flex-col lg:mx-0 lg:basis-[50%]">
                {EXPERIENCES.map((experience, index) => (
                    <li
                        key={index}
                        className={`relative flex gap-6 lg:justify-start lg:gap-12 ${index !== EXPERIENCES.length - 1 && timelineLineStyle + " pb-16"}`}
                    >
                        <div
                            className={`size-16 shrink-0 overflow-hidden rounded-full shadow-2xl lg:size-28 ${experience.company === "Stockland" ? "shadow-stockland bg-stockland" : "shadow-unsw bg-unsw"}`}
                        >
                            <img
                                src={experience.image}
                                alt={`logo of ${experience.company}`}
                                className="aspect-square"
                            />
                        </div>
                        <div
                            className={`from-card border-tertiary ${experience.company === "Stockland" ? "to-stockland/50" : "to-unsw/50"} flex w-max cursor-pointer flex-col gap-2 rounded-lg border bg-radial-[at_25%_25%] to-75% p-4 transition-all hover:-translate-y-2.5 lg:gap-4 lg:p-6`}
                            onClick={() => {
                                if (isMobile()) {
                                    openModal(experience);
                                } else {
                                    setSelectedExperienceIndex(index);
                                    setSelectedExperience(experience);
                                }
                            }}
                        >
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold lg:text-xl">
                                    {experience.title}
                                </h3>
                                <p className="text-lg font-semibold lg:text-xl">
                                    {experience.company}
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <p className="text-md lg:text-xl">
                                        {experience.duration}
                                    </p>
                                </div>
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
            <ExperienceDetails selectedExperience={selectedExperience} />
            <Modal
                dialogRef={modalRef}
                additionalClasses="max-w-[600px] lg:hidden"
            >
                {selectedExperience && (
                    <ExperiencesCard selectedExperience={selectedExperience} />
                )}
            </Modal>
        </div>
    );
}

export default ExperiencesBlock;
