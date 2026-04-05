import type { TechRow } from "../../utils/types";
import CanvasComponent from "../Canvas";
import LogoMesh from "./LogoMesh";
import { OrbitControls } from "@react-three/drei";

export function TechRow({ title, technologies }: TechRow) {
    return (
        <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="mt-4 flex max-w-full flex-wrap gap-6">
                {technologies.map((tech) => (
                    //Render Canvas
                    <CanvasComponent key={tech.name} height="60px" width="60px">
                        <LogoMesh />
                        <ambientLight intensity={0.8} />
                        <pointLight position={[5, 5, 5]} />
                        <OrbitControls
                            autoRotate={true}
                            makeDefault
                            minPolarAngle={Math.PI / 2}
                            maxPolarAngle={Math.PI / 2}
                        />
                    </CanvasComponent>
                ))}
            </div>
        </div>
    );
}
