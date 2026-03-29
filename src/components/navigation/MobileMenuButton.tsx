import { type Dispatch, type SetStateAction } from "react";

function MobileMenuButton({
    isMenuOpen,
    setIsMenuOpen,
}: {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <button
            className={`relative flex w-10 flex-col justify-center gap-2 py-0 transition-all duration-300 ease-in-out ${isMenuOpen && "rotate-180"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <div
                className={`h-0.75 w-full rounded-3xl bg-current transition-all duration-300 ease-in-out ${isMenuOpen && "absolute w-6! rotate-42"}`}
            ></div>
            <div
                className={`h-0.75 w-4 rounded-3xl bg-current transition-all duration-300 ease-in-out ${isMenuOpen && "absolute w-6! -rotate-42"}`}
            ></div>
        </button>
    );
}

export default MobileMenuButton;
