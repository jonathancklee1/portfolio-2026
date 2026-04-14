import type { TechRow } from "../../utils/types";
import Pill from "../Pill";
import TechLogo from "./TechLogo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export function TechRow({ title, technologies, pillColour }: TechRow) {
    const techRowRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                duration: 0.5,
                scrollTrigger: {
                    trigger: techRowRef.current,
                    start: "top 95%",
                },
            });
            tl.from(techRowRef.current, {
                autoAlpha: 0,
                y: 40,
                ease: "power3.out",
            }).from(".tech-icon", {
                autoAlpha: 0,
                x: 40,
                ease: "power3.out",
                stagger: 0.1,
            });
        },
        { scope: techRowRef },
    );
    return (
        <div ref={techRowRef}>
            <h3 className="row-heading text-xl font-bold">{title}</h3>
            <div className="mt-4 flex max-w-full flex-wrap gap-6">
                {technologies.map((tech) => (
                    <div className="tech-icon group flex flex-col items-center gap-2">
                        <div
                            key={tech.name}
                            className="perspective-1000 flex h-15 w-15 items-center justify-center hover:animate-[rotateY_2s_linear_infinite]"
                        >
                            <TechLogo svgPath={tech.icon || ""} />
                        </div>
                        <Pill background={pillColour} colour={"black"}>
                            <span>{tech.name}</span>
                        </Pill>
                    </div>
                ))}
            </div>
        </div>
    );
}
