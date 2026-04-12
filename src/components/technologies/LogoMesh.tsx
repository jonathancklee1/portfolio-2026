import { useRef, useLayoutEffect, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";

function LogoMesh({
    svgPath,
    targetSize = 10,
}: {
    svgPath: string;
    targetSize?: number;
}) {
    const groupRef = useRef<THREE.Group>(null!);
    const svgData = useLoader(SVGLoader, svgPath);

    // 1. Flatten all paths into shapes first
    const shapes = useMemo(() => {
        return svgData.paths.flatMap((path) => {
            return path
                .toShapes(true)
                .map((shape) => ({ shape, color: path.color }));
        });
    }, [svgData]);

    useLayoutEffect(() => {
        if (!groupRef.current) return;

        // 1. Reset scale/rotation before measurement to get clean bounds
        groupRef.current.scale.set(1, 1, 1);
        groupRef.current.rotation.set(0, 0, 0);

        // 2. Measure the actual "ink" area of the SVG
        const box = new THREE.Box3().setFromObject(groupRef.current);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        // 3. Force it into your standard 3D world size (e.g. 10 units)
        const maxDim = Math.max(size.x, size.y);
        const scaleFactor = targetSize / maxDim;

        // 4. Center the internal geometry so rotation is on center
        groupRef.current.children.forEach((child) => {
            if (child instanceof THREE.Mesh) {
                child.geometry.translate(-center.x, -center.y, 0);
            }
        });

        // 5. Apply the normalized scale (flip Y for SVG coords)
        groupRef.current.scale.set(scaleFactor, -scaleFactor, scaleFactor);
    }, [svgPath, targetSize, shapes]);

    return (
        <group ref={groupRef}>
            {shapes.map((item, index) => (
                <mesh key={index}>
                    <extrudeGeometry
                        args={[
                            item.shape,
                            { depth: 2, bevelEnabled: false, curveSegments: 4 },
                        ]}
                    />
                    <meshStandardMaterial
                        color={item.color}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            ))}
        </group>
    );
}

export default LogoMesh;
