import type { ReactNode } from "react";

function Pill({
    background,
    colour,
    children,
}: {
    background: string;
    colour: string;
    children: ReactNode;
}) {
    return (
        <div
            className={`w-fit rounded-full px-3 py-1 text-sm font-bold text-${colour} ${background}`}
        >
            {children}
        </div>
    );
}

export default Pill;
