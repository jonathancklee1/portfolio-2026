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

    const shapes = useMemo(() => {
        return svgData.paths.flatMap((path) => {
            const pathShapes = SVGLoader.createShapes(path);
            return pathShapes.map((shape) => ({
                shape,
                color: path.color,
                index: path.userData?.style.fill,
            }));
        });
    }, [svgData]);

    useLayoutEffect(() => {
        if (!groupRef.current || shapes.length === 0) return;

        groupRef.current.scale.set(1, 1, 1);
        groupRef.current.rotation.set(0, 0, 0);

        const box = new THREE.Box3().setFromObject(groupRef.current);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        const maxDim = Math.max(size.x, size.y);
        const scaleFactor = targetSize / maxDim;

        groupRef.current.children.forEach((child) => {
            if (child instanceof THREE.Mesh) {
                child.geometry.translate(-center.x, -center.y, 0);
            }
        });

        groupRef.current.scale.set(scaleFactor, -scaleFactor, scaleFactor);
    }, [shapes, targetSize]); // Removed svgPath as a dependency to prevent redundant flashes

    return (
        <group ref={groupRef}>
            {shapes.map((item, index) => (
                <mesh key={`${item.color}-${index}`}>
                    <extrudeGeometry
                        args={[
                            item.shape,
                            {
                                depth: 2,
                                bevelEnabled: false,
                                curveSegments: 3,
                            },
                        ]}
                    />
                    <meshStandardMaterial
                        color={item.color}
                        side={THREE.DoubleSide}
                        depthWrite={true}
                    />
                </mesh>
            ))}
        </group>
    );
}

export default LogoMesh;
