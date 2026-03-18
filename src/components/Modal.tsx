import type { ReactNode, RefObject } from "react";
import Close from "../assets/icons/close.svg?react";

function Modal({
    dialogRef,
    additionalClasses,
    children,
}: {
    dialogRef: RefObject<HTMLDialogElement | null>;
    additionalClasses?: string;
    children: ReactNode;
}) {
    return (
        <dialog
            id="dialog"
            className={`inset-1/2 w-[90%] place-self-center rounded-2xl backdrop:bg-black/20 backdrop:backdrop-blur-sm ${additionalClasses}`}
            ref={dialogRef}
            closedby="any"
        >
            {children}
            <button
                className="focus-visible:ring-primary absolute top-4 right-3 focus:border-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-white"
                aria-label="close modal"
            >
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
