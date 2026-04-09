import type { TechRow } from "../../utils/types";
import CanvasComponent from "../Canvas";
import Pill from "../Pill";
import LogoMesh from "./LogoMesh";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
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
                    <div className="tech-icon flex flex-col items-center gap-2">
                        <CanvasComponent
                            key={tech.name}
                            height="60px"
                            width="60px"
                        >
                            <LogoMesh svgPath={tech.icon} />
                            <ambientLight intensity={2.5} />

                            <OrbitControls
                                // autoRotate={true}
                                makeDefault
                                minPolarAngle={Math.PI / 2}
                                maxPolarAngle={Math.PI / 2}
                                enableZoom={false}
                            />
                            <PerspectiveCamera
                                makeDefault
                                position={[0, 0, 15]}
                            />
                        </CanvasComponent>
                        <Pill
                            background={pillColour}
                            colour={"var(--color-text)"}
                        >
                            <span>{tech.name}</span>
                        </Pill>
                    </div>
                ))}
            </div>
        </div>
    );
}
