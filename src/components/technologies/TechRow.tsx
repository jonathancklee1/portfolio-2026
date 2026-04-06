import type { TechRow } from "../../utils/types";
import CanvasComponent from "../Canvas";
import Pill from "../Pill";
import LogoMesh from "./LogoMesh";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export function TechRow({ title, technologies, pillColour }: TechRow) {
    return (
        <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="mt-4 flex max-w-full flex-wrap gap-6">
                {technologies.map((tech) => (
                    //Render Canvas
                    <div className="flex flex-col items-center gap-2">
                        <CanvasComponent
                            key={tech.name}
                            height="60px"
                            width="60px"
                        >
                            <LogoMesh svgPath={tech.icon} />
                            <ambientLight intensity={0.8} />
                            <pointLight position={[5, 5, 5]} />
                            <OrbitControls
                                // autoRotate={true}
                                makeDefault
                                minPolarAngle={Math.PI / 2}
                                maxPolarAngle={Math.PI / 2}
                                // enableZoom={false}
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
