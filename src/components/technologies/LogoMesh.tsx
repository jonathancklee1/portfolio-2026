import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";

function LogoMesh() {
    const texture = useLoader(SVGLoader, "src/assets/icons/linkedin.svg");

    const shapes = texture.paths.flatMap((path) => {
        const pathShapes = path.toShapes(true);
        // Attach original color from SVG to the shape for later use
        return pathShapes.map((shape) => ({ shape, color: path.color }));
    });
    return (
        <group scale={[1, -1, 1]}>
            {shapes.map((item, index) => (
                <mesh key={index}>
                    <extrudeGeometry
                        args={[item.shape, { depth: 2, bevelEnabled: true }]}
                    />
                    <meshStandardMaterial
                        color={"red"}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            ))}
        </group>
    );
}

export default LogoMesh;
