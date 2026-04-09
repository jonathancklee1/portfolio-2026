import type { Project } from "../utils/types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { isMobile } from "../utils/isMobile";
import { useRef } from "react";
import Button from "./Button";
import External from "../assets/icons/external.svg?react";

function ProjectCard({ project: project }: { project: Project }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const cardDescRef = useRef<HTMLDivElement>(null);
    gsap.registerPlugin(useGSAP);

    const { contextSafe } = useGSAP({ scope: cardRef });

    const onEnter = contextSafe(() => {
        if (!isMobile()) {
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
        }
    });

    const onLeave = contextSafe(() => {
        if (!isMobile()) {
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
        }
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
                ease: "power3.out",
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
            className="project-card relative h-64 w-full items-center justify-center overflow-hidden rounded-2xl border border-white shadow-2xl"
            ref={cardRef}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover"
            />
            <div
                className="card-overlay to-card/60 absolute right-0 bottom-0 left-0 flex h-auto flex-col items-start justify-between bg-linear-to-b from-transparent to-50% p-4 pt-8"
                ref={overlayRef}
            >
                <div className="overflow-hidden">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="card-description lg:h-0" ref={cardDescRef}>
                        {project.description}
                    </p>
                </div>
                <div className="mt-4 flex gap-4">
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
                    <div className="gh-button-wrapper">
                        <Button
                            text="GitHub"
                            variant="secondary"
                            link={project.ghLink}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
