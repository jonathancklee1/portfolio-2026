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
            }}
        >
            <Canvas {...props} camera={{ position: [30, 0, 0] }}>
                {children}
            </Canvas>
        </div>
    );
}

export default CanvasComponent;
