import type { Project } from "../utils/types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { isMobile } from "../utils/isMobile";
import { useRef, useState } from "react";
import Button from "./Button";
import External from "../assets/icons/external.svg?react";

function ProjectCard({ project: project }: { project: Project }) {
    const [isDescOpen, setIsDescOpen] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const cardDescRef = useRef<HTMLDivElement>(null);
    gsap.registerPlugin(useGSAP);

    const { contextSafe } = useGSAP({ scope: cardRef });

    const onEnter = contextSafe(() => {
        // if (!isMobile()) {
        gsap.to(cardRef.current, {
            scale: 1.02,
            duration: 0.2,
            ease: "easeInOut",
        });
        const tl = gsap.timeline();
        tl.to(overlayRef.current, {
            height: "100%",
            duration: 0.3,
            overwrite: true,
        });
        tl.to(cardDescRef.current, {
            opacity: 1,
            height: "auto",
            duration: 0.2,
            overwrite: true,
        });
        // }
    });

    const onLeave = contextSafe(() => {
        // if (!isMobile()) {
        gsap.to(cardRef.current, {
            scale: 1,
            duration: 0.2,
            ease: "easeInOut",
        });
        const tl = gsap.timeline();
        tl.to(cardDescRef.current, {
            opacity: 0,
            height: "0",
            duration: 0,
            overwrite: true,
        });
        tl.to(overlayRef.current, {
            height: "auto",
            duration: 0.2,
            overwrite: true,
        });
        // }
    });
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 90%",
                },
            });
            tl.from(cardRef.current, {
                autoAlpha: 0,
                y: 40,
                duration: 0.5,
                ease: "power2.out",
            })
                .from(".live-button-wrapper", {
                    autoAlpha: 0,
                    y: 40,
                    duration: 0.2,
                    ease: "power3.in",
                })
                .from(".gh-button-wrapper", {
                    autoAlpha: 0,
                    y: 40,
                    duration: 0.2,
                    ease: "power3.in",
                });
        },
        { scope: cardRef },
    );

    return (
        <div
            className="project-card relative h-74 w-full items-center justify-center overflow-hidden rounded-2xl border border-white shadow-2xl lg:h-96"
            ref={cardRef}
            onMouseEnter={isMobile() ? () => {} : onEnter}
            onMouseLeave={isMobile() ? () => {} : onLeave}
        >
            <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover"
            />
            <div
                className="card-overlay absolute right-0 bottom-0 left-0 flex h-auto flex-col items-start justify-between bg-linear-to-b from-transparent to-black/70 to-50% p-4 pt-8 lg:pt-16"
                ref={overlayRef}
            >
                <div
                    className={`${isDescOpen ? "overflow-auto" : "overflow-hidden"} lg:overflow-visible`}
                >
                    <h3 className="text-2xl font-bold shadow-2xl">
                        {project.name}
                    </h3>
                    <p
                        className="card-description mt-1 h-0 overflow-hidden lg:h-0"
                        ref={cardDescRef}
                    >
                        {project.description}
                    </p>
                </div>
                <div className="lg:mt-4">
                    <button
                        className="mb-4 p-0 pt-1 lg:hidden"
                        onClick={() => {
                            if (isDescOpen) {
                                onLeave();
                            } else {
                                onEnter();
                            }
                            setIsDescOpen(!isDescOpen);
                        }}
                    >
                        <span className="underline">
                            {isDescOpen ? "Collapse" : "Read More"}
                        </span>{" "}
                        &rarr;
                    </button>
                    <div className="flex gap-4">
                        {project.liveLink && (
                            <div className="live-button-wrapper">
                                <Button
                                    text="Live Demo"
                                    variant="primary"
                                    link={project.liveLink}
                                    icon={
                                        <External
                                            fill={"var(--color-background)"}
                                            width="20px"
                                            height="20px"
                                        />
                                    }
                                />
                            </div>
                        )}
                        {project.ghLink && (
                            <div className="gh-button-wrapper">
                                <Button
                                    text="GitHub"
                                    variant="secondary"
                                    link={project.ghLink}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
