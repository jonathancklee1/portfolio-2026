import type { ReactNode, RefObject } from "react";
import Close from "../assets/icons/close.svg?react";

function Modal({
    dialogRef,
    children,
}: {
    dialogRef: RefObject<HTMLDialogElement | null>;
    children: ReactNode;
}) {
    return (
        <dialog
            id="dialog"
            className="inset-1/2 w-full place-self-center rounded-lg bg-(--color-card) p-8 text-left text-(--color-text) backdrop:bg-black/20 backdrop:backdrop-blur-sm"
            ref={dialogRef}
        >
            <form method="dialog">
                {children}
                <button type="submit" className="absolute top-4 right-3">
                    <Close className="" width={30} height={30} />
                </button>
            </form>
        </dialog>
    );
}

export default Modal;
