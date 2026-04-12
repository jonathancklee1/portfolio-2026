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
                // Caps resolution for stability
                dpr={[1, 2]}
                gl={{
                    antialias: false, // Disabling this saves ~20-30% GPU memory
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: true, // Helps prevent the "white screen" crash
                }}
                style={{ touchAction: "none" }}
                camera={{ fov: 75 }}
                onCreated={({ gl }) => {
                    gl.domElement.addEventListener(
                        "webglcontextlost",
                        (event) => {
                            event.preventDefault();
                            console.warn("WebGL Context Lost. Cleaning up...");
                            window.location.reload();
                        },
                        false,
                    );
                }}
            >
                {children}
            </Canvas>
        </div>
    );
}

export default CanvasComponent;
