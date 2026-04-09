import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
function SectionHeader({ text }: { text: string }) {
    const headerRef = useRef(null);
    useGSAP(
        () => {
            gsap.from(headerRef.current, {
                autoAlpha: 0,
                translateY: 40,
                duration: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 90%",
                },
            });
        },
        { scope: headerRef },
    );

    return (
        <h2
            ref={headerRef}
            className="section-header inline-block text-3xl font-bold md:text-4xl"
        >
            {text}
        </h2>
    );
}

export default SectionHeader;
