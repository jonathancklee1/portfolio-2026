import { EXPERIENCES } from "../../data/contants";
import ChevronRight from "../../assets/icons/chevron-right.svg?react";
import { useRef, useState } from "react";
import Modal from "../Modal";
import ExperiencesCard from "./ExperiencesCard";
import type { Experience } from "../../utils/types";
import { isMobile } from "../../utils/isMobile";
import ExperienceDetails from "./ExperienceDetails";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
function ExperiencesBlock() {
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState<
        number | null
    >(null);
    const modalRef = useRef<HTMLDialogElement>(null);
    const [selectedExperience, setSelectedExperience] =
        useState<Experience | null>(null);

    const openModal = (experience: Experience) => {
        setSelectedExperience(experience);
        modalRef.current?.showModal();
    };
    const timelineLineStyle =
        "before:absolute before:top-15 lg:before:top-25 before:left-7 lg:before:left-12 before:h-35 lg:before:h-40 before:w-2 lg:before:w-3 before:bg-white before:shadow-xl before:content-[''] before:shadow-white";

    //Gsap
    gsap.registerPlugin(Flip);
    const container = useRef(null);
    const selectedExperienceRef = useRef<HTMLDivElement | null>(null);
    const experienceCardRefs = useRef<Record<number, HTMLElement | null>>({});
    function cleanFlipStyles(index: number | null) {
        if (index === null) return;
        const experienceCard = experienceCardRefs.current[index];
        const selectedCard = selectedExperienceRef.current;

        [experienceCard, selectedCard].forEach((el) => {
            if (!el) return;
            el.removeAttribute("style");
        });
    }
    function handleCardSelection(experience: Experience, index: number) {
        if (isMobile()) {
            openModal(experience);
        } else {
            setSelectedExperienceIndex(index);
            setSelectedExperience(experience);
        }
    }

    useGSAP(
        () => {
            if (selectedExperienceIndex === null) return;
            const state = Flip.getState(
                ".selected-card, .experience-card-" + selectedExperienceIndex,
            );
            Flip.from(state, {
                duration: 0.6,
                targets: `.experience-card-${selectedExperienceIndex}, .selected-card`,
                ease: "power1.inOut",
                scale: true,
                // paused: true,
                onComplete: () => cleanFlipStyles(selectedExperienceIndex),
                onInterrupt: () => cleanFlipStyles(selectedExperienceIndex),
            });
        },
        { dependencies: [selectedExperienceIndex], scope: container },
    );

    return (
        <div className="flex gap-12" ref={container}>
            <ul className="mx-auto flex w-fit shrink-0 flex-col lg:mx-0 lg:basis-[50%]">
                {EXPERIENCES.map((experience, index) => (
                    <li
                        key={index}
                        className={`relative flex gap-6 lg:justify-start lg:gap-12 ${index !== EXPERIENCES.length - 1 && timelineLineStyle + " pb-16"}`}
                    >
                        {/* Logo */}
                        <div
                            className={`size-16 shrink-0 overflow-hidden rounded-full shadow-2xl lg:size-28 ${experience.company === "Stockland" ? "shadow-stockland bg-stockland" : "shadow-unsw bg-unsw"}`}
                        >
                            <img
                                src={experience.image}
                                alt={`logo of ${experience.company}`}
                                className="aspect-square"
                            />
                        </div>
                        {/* Experience Card */}
                        <div
                            ref={(el) => {
                                experienceCardRefs.current[index] = el;
                            }}
                            data-flip-id={`experience-card-${index}`}
                            className={`from-card border-tertiary ${experience.company === "Stockland" ? "to-stockland/50" : "to-unsw/50"} experience-card-${index} flex w-max cursor-pointer flex-col gap-2 rounded-lg border bg-radial-[at_25%_25%] to-75% p-4 transition-transform hover:-translate-y-2.5 lg:gap-4 lg:p-6 ${
                                selectedExperienceIndex === index && "invisible"
                            }`}
                            onClick={() =>
                                handleCardSelection(experience, index)
                            }
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
            <div
                data-flip-id={`experience-card-${selectedExperienceIndex}`}
                className={`selected-card ${selectedExperienceIndex !== null ? "block" : "hidden"}`}
                ref={selectedExperienceRef}
            >
                <ExperienceDetails selectedExperience={selectedExperience} />
            </div>
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
