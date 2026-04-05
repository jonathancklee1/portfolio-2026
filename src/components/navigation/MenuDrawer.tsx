import { useGSAP } from "@gsap/react";
import { PAGE_LINKS } from "../../data/contants";
import gsap from "gsap";
function MenuDrawer({
    isMenuOpen,
    setActiveLink,
    activeLink,
}: {
    isMenuOpen: boolean;
    setActiveLink: (link: string) => void;
    activeLink: string;
}) {
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        if (isMenuOpen) {
            gsap.to(".menu-button", {
                x: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power4.inOut",
                stagger: 0.1,
            });
        } else {
            gsap.to(".menu-button", {
                x: 100,
                opacity: 0,
                duration: 0.3,
                ease: "power4.inOut",
                stagger: 0.1,
            });
        }
    }, [isMenuOpen]);

    return (
        <ul
            className={`absolute top-[calc(100%+1rem)] right-0 z-50 flex flex-col items-end gap-4 lg:hidden`}
        >
            {PAGE_LINKS.map((link) => (
                <li
                    key={link}
                    className={`menu-button glassmorphism w-fit translate-x-37.5 rounded-3xl rounded-tl-xl bg-white/20 px-6 py-3 text-lg capitalize shadow-lg`}
                >
                    <a
                        href={`#${link}`}
                        className={activeLink === link ? "text-secondary" : ""}
                        onClick={() => setActiveLink(link)}
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default MenuDrawer;
