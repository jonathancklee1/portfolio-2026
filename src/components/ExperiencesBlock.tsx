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
            <ul className="flex flex-col gap-12">
                {EXPERIENCES.map((experience, index) => (
                    <li key={index} className="relative flex gap-4">
                        <div className="bg-secondary my-4 size-8 rounded-full"></div>
                        <div
                            className="bg-card flex cursor-pointer flex-col gap-2 rounded-lg p-4"
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
            <Modal dialogRef={modalRef}>
                {selectedExperience && (
                    <ExperiencesCard
                        description={selectedExperience.description}
                        company={selectedExperience.company}
                        title={selectedExperience.title}
                    />
                )}
            </Modal>
        </>
    );
}

export default ExperiencesBlock;
