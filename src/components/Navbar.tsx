import { useEffect, useRef, useState } from "react";
import { PAGE_LINKS } from "../data/contants";
import { flushSync } from "react-dom";
import MobileMenuButton from "./MobileMenuButton";
import MenuDrawer from "./MenuDrawer";

function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (navRef.current) {
                if (window.scrollY > 20) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        });
    }, []);

    function handleLinkClick(link: string) {
        //Fallback for browsers that don't support view transitions
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
            className={`bg-background/0 sticky top-0 right-0 left-0 z-50 px-0 transition-all duration-300 ease-in-out lg:px-2 ${isScrolled && "top-4 lg:px-6"}`}
        >
            <nav
                ref={navRef}
                className={`flex items-center justify-between py-4 font-bold transition-all duration-300 ease-in-out lg:px-3 lg:text-xl ${isScrolled && "glassmorphism rounded-full border-none px-5 shadow-2xl backdrop-blur-xl"}`}
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
                            className={`${activeLink === link ? "text-white" : "text-gray-300"} hover:text-neon-green transition-colors duration-300 ease-in-out`}
                        >
                            <span className="font-semibold">
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </span>
                            {activeLink === link && (
                                <div
                                    className="bg-neon-green h-0.5 w-full rounded-full"
                                    style={{
                                        viewTransitionName: "link",
                                    }}
                                ></div>
                            )}
                        </a>
                    ))}
                </div>
                {/* Mobile Nav */}
                <div className="flex md:hidden">
                    <MobileMenuButton
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                    />
                </div>
            </nav>
            <MenuDrawer
                activeLink={activeLink}
                setActiveLink={handleLinkClick}
                isMenuOpen={isMenuOpen}
            />
        </header>
    );
}

export default Navbar;
