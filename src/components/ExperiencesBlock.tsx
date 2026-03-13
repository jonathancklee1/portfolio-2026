import { EXPERIENCES } from "../data/contants";
import ChevronRight from "../assets/icons/chevron-right.svg?react";
import { useRef } from "react";
import Modal from "./Modal";
function ExperiencesBlock() {
    const modalRef = useRef<HTMLDialogElement>(null);
    return (
        <ul className="flex flex-col gap-12">
            {EXPERIENCES.map((experience, index) => (
                <li key={index} className="relative flex gap-4">
                    <div className="my-4 size-8 rounded-full bg-(--color-secondary)"></div>
                    <div
                        className="flex cursor-pointer flex-col gap-2 rounded-lg bg-(--color-card) p-4"
                        onClick={() => {
                            modalRef.current?.showModal();
                        }}
                    >
                        <h3 className="text-xl font-bold">
                            {experience.title}
                        </h3>
                        <p className="text-lg font-semibold">
                            {experience.company}
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="text-md">{experience.duration}</p>
                            <div>
                                <ChevronRight
                                    className=""
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </div>
                        {/* <p className="text-sm">{experience.description}</p> */}
                    </div>
                </li>
            ))}
            <Modal dialogRef={modalRef}>
                <h2 className="text-2xl font-bold">
                    {EXPERIENCES[0].title} at {EXPERIENCES[0].company}
                </h2>
                <p className="mt-4">{EXPERIENCES[0].description}</p>
            </Modal>
        </ul>
    );
}

export default ExperiencesBlock;
