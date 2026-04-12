import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";
function CanvasComponent({
    children,
    height,
    width,
    props,
}: {
    children: ReactNode;
    height?: string;
    width?: string;
    props?: React.ComponentProps<typeof Canvas>;
}) {
    return (
        <div
            style={{
                height: height,
                width: width,
                cursor: "grab",
            }}
        >
            <Canvas
                {...props}
                dpr={[1, 2]}
                // Prevents the browser from trying to "scroll" the 3D scene
                style={{ touchAction: "none" }}
                camera={{ fov: 75 }}
            >
                {children}
            </Canvas>
        </div>
    );
}

export default CanvasComponent;
