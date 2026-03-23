import { useEffect, useRef, useState } from "react";
import { PAGE_LINKS } from "../data/contants";
import { flushSync } from "react-dom";

function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (navRef.current) {
                if (window.scrollY > 50) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        });
    }, []);

    function handleLinkClick(link: string) {
        if (!document.startViewTransition) {
            setActiveLink(link);
            return;
        }
        // With a transition:
        document.startViewTransition(() => {
            flushSync(() => {
                setActiveLink(link);
            });
        });
    }

    return (
        <header
            className={`sticky top-0 right-0 left-0 z-10 px-2 transition-all duration-300 ease-in-out ${isScrolled && "glassmorphism top-4 rounded-full border-none px-6 shadow-2xl backdrop-blur-xl"}`}
        >
            <nav
                ref={navRef}
                className={`flex justify-between px-4 py-6 text-xl font-bold transition-all duration-300 ease-in-out`}
            >
                <a href="#" onClick={() => handleLinkClick("home")}>
                    <span>JCKL</span>
                    {activeLink === "home" && (
                        <div
                            className="bg-neon-green h-1 w-full rounded-full"
                            style={{
                                viewTransitionName: "link", // Changed to same name
                            }}
                        ></div>
                    )}
                </a>

                <div className="hidden gap-6 md:flex">
                    {PAGE_LINKS.map((link) => (
                        <a
                            href={`#${link}`}
                            onClick={() => handleLinkClick(link)}
                            key={link}
                        >
                            <span>
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </span>
                            {activeLink === link && (
                                <div
                                    className="bg-neon-green h-1 w-full rounded-full"
                                    style={{
                                        viewTransitionName: "link", // Changed to same name
                                    }}
                                ></div>
                            )}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
