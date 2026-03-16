import { EXPERIENCES } from "../data/contants";
import ChevronRight from "../assets/icons/chevron-right.svg?react";
import { useRef, useState } from "react";
import Modal from "./Modal";
import ExperiencesCard from "./ExperiencesCard";
import type { Experience } from "../utils/types";

function ExperiencesBlock() {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [selectedExperience, setSelectedExperience] =
        useState<Experience | null>(null);

    const openModal = (experience: Experience) => {
        setSelectedExperience(experience);
        modalRef.current?.showModal();
    };

    return (
        <>
            <ul className="flex flex-col gap-20">
                {EXPERIENCES.map((experience, index) => (
                    <li
                        key={index}
                        className="relative flex justify-center gap-6"
                    >
                        <div className="size-16 shrink-0 overflow-hidden rounded-full">
                            <img
                                src={experience.image}
                                alt={`logo of ${experience.company}`}
                                className="aspect-square"
                            />
                        </div>
                        <div
                            className="from-card border-tertiary to-tertiary/30 flex cursor-pointer flex-col gap-2 rounded-lg border bg-radial-[at_25%_25%] to-75% p-4 backdrop-blur-3xl"
                            onClick={() => openModal(experience)}
                        >
                            <h3 className="text-xl font-bold">
                                {experience.title}
                            </h3>
                            <p className="text-lg font-semibold">
                                {experience.company}
                            </p>
                            <div className="flex items-center justify-between">
                                <p className="text-md">{experience.duration}</p>
                                <div>
                                    <ChevronRight
                                        className=""
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Modal dialogRef={modalRef} maxModalWidth="max-w-[500px] ">
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
