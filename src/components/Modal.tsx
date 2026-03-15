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
            className="inset-1/2 w-full place-self-center rounded-2xl backdrop:bg-black/20 backdrop:backdrop-blur-sm"
            ref={dialogRef}
            closedby="any"
        >
            {children}
            <button className="absolute top-4 right-3" aria-label="close modal">
                <Close
                    className=""
                    width={30}
                    height={30}
                    onClick={() => dialogRef.current?.close()}
                />
            </button>
        </dialog>
    );
}

export default Modal;
