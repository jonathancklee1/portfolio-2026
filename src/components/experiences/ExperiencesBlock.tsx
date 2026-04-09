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
import Pill from "../Pill";
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
            gsap.utils.toArray<Element>(".experience-card").forEach((card) => {
                gsap.from(card, {
                    autoAlpha: 0,
                    x: 40,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    },
                });
            });
            if (isMobile()) return;

            gsap.from(".experience-details", {
                autoAlpha: 0,
                x: 40,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".experience-details",
                    start: "top 90%",
                },
            });
            Object.values(experienceCardRefs.current).forEach((card) => {
                if (!card) return;

                const handleMouseEnter = () => {
                    gsap.to(card, {
                        y: -10,
                        duration: 0.4,
                        ease: "power4.inOut",
                    });
                };

                const handleMouseLeave = () => {
                    gsap.to(card, {
                        y: 0,
                        duration: 0.4,
                        ease: "power4.inOut",
                    });
                };

                card.addEventListener("mouseenter", handleMouseEnter);
                card.addEventListener("mouseleave", handleMouseLeave);

                // Cleanup function to remove event listeners
                return () => {
                    card.removeEventListener("mouseenter", handleMouseEnter);
                    card.removeEventListener("mouseleave", handleMouseLeave);
                };
            });

            if (selectedExperienceIndex === null) return;

            const state = Flip.getState(
                ".selected-card, .experience-card-" + selectedExperienceIndex,
            );
            Flip.from(state, {
                duration: 0.5,
                targets: `.experience-card-${selectedExperienceIndex}, .selected-card`,
                ease: "power1.inOut",
                scale: true,
                onStart: () => {
                    cleanFlipStyles(selectedExperienceIndex);
                    experienceCardRefs.current[
                        selectedExperienceIndex
                    ]?.classList.add("opacity-0");

                    Object.entries(experienceCardRefs.current).forEach(
                        ([index, card]) => {
                            const cardIndex = parseInt(index);
                            if (
                                card &&
                                card.classList.contains("opacity-0") &&
                                cardIndex !== selectedExperienceIndex
                            ) {
                                gsap.fromTo(
                                    card,
                                    {
                                        duration: 0.6,
                                        opacity: 0,
                                        translateX: 50,
                                        ease: "power1.inOut",
                                    },
                                    {
                                        duration: 0.6,
                                        opacity: 1,
                                        translateX: 0,
                                        ease: "power1.inOut",
                                    },
                                );
                                card.classList.remove("opacity-0");
                            }
                        },
                    );
                },
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
                        className={`code-arrow relative flex gap-3 lg:justify-start lg:gap-12 ${index !== EXPERIENCES.length - 1 && "timeline-line" + " pb-12"}`}
                    >
                        {/* Logo */}
                        <div
                            className={`size-14 shrink-0 overflow-hidden rounded-full shadow-2xl lg:size-28 ${experience.company === "Stockland" ? "shadow-stockland bg-stockland" : "shadow-unsw bg-unsw"}`}
                        >
                            <img
                                src={experience.image}
                                alt={`logo of ${experience.company}`}
                                className="aspect-square"
                            />
                        </div>
                        {/* Experience Card */}
                        <div className="experience-card relative">
                            <div
                                ref={(el) => {
                                    experienceCardRefs.current[index] = el;
                                }}
                                data-flip-id={`experience-card-${index}`}
                                className={`from-card border-tertiary ${experience.company === "Stockland" ? "to-stockland/50" : "to-unsw/50"} experience-card-${index} relative z-10 flex h-fit w-fit cursor-pointer flex-col gap-2 rounded-3xl border-2 bg-radial-[at_25%_25%] to-75% p-4 lg:gap-4 lg:p-6`}
                                onClick={() =>
                                    //
                                    handleCardSelection(experience, index)
                                }
                            >
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-bold lg:text-xl">
                                        {experience.title}
                                    </h3>
                                    <Pill
                                        background={
                                            experience.company === "Stockland"
                                                ? "bg-stockland"
                                                : "bg-unsw"
                                        }
                                        colour={
                                            experience.company === "Stockland"
                                                ? "white"
                                                : "black"
                                        }
                                    >
                                        <p className="text-md">
                                            {experience.company}
                                        </p>
                                    </Pill>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="">
                                        <p className="text-md lg:text-xl">
                                            {experience.duration}
                                        </p>
                                    </div>
                                    <ChevronRight width={30} height={30} />
                                </div>
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-3xl border-3 border-dashed border-white"></div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="experience-details relative hidden w-full lg:block">
                <div
                    data-flip-id={`experience-card-${selectedExperienceIndex}`}
                    className={`selected-card ${selectedExperienceIndex !== null ? "block" : "hidden"}`}
                    ref={selectedExperienceRef}
                >
                    <ExperienceDetails
                        selectedExperience={selectedExperience}
                    />
                </div>
                {selectedExperienceIndex === null && (
                    <div className="absolute inset-0 grid h-full w-full place-items-center rounded-3xl border-2 border-dashed border-white text-center font-bold">
                        <p>Click on my experiences to view more details</p>
                    </div>
                )}
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
