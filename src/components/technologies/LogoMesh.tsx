import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";

function LogoMesh() {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useLoader(SVGLoader, "src/assets/icons/linkedin.svg");

    const shapes = texture.paths.flatMap((path) => {
        const pathShapes = path.toShapes(true);
        // Attach original color from SVG to the shape for later use
        return pathShapes.map((shape) => ({ shape, color: path.color }));
    });
    return (
        <mesh ref={meshRef}>
            {shapes.map((item, index) => (
                <mesh key={index}>
                    {/* Use extrudeGeometry for 3D depth or shapeGeometry for 2D */}
                    <extrudeGeometry
                        args={[item.shape, { depth: 2, bevelEnabled: true }]}
                    />
                    <meshStandardMaterial
                        color={"red"}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            ))}
        </mesh>
    );
}

export default LogoMesh;
