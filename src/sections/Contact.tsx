import SectionHeader from "../components/SectionHeader";
import Email from "../assets/icons/email.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function Contact() {
    const contactSectionRef = useRef(null);
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contactSectionRef.current,
                    start: "top 90%",
                },
            });

            tl.from(contactSectionRef.current, {
                autoAlpha: 0,
                y: 40,
                duration: 0.5,
                ease: "power3.out",
            })
                .from(
                    ".white-divider",
                    {
                        autoAlpha: 0,
                        y: 40,
                        duration: 0.5,
                        ease: "power3.out",
                    },
                    "<",
                )
                .from(
                    ".cta-text",
                    {
                        autoAlpha: 0,
                        y: 40,
                        duration: 0.5,
                        ease: "power3.out",
                    },
                    "<",
                )
                .from(".cta-button", {
                    autoAlpha: 0,
                    y: 40,
                    duration: 0.5,
                    ease: "power3.out",
                    stagger: 0.2,
                });
        },
        { scope: contactSectionRef },
    );
    return (
        <section
            className="flex flex-col gap-6 lg:gap-8"
            id="contact"
            ref={contactSectionRef}
        >
            <SectionHeader text="Contact Me" />
            <div className="white-divider bg-text h-px w-full"></div>
            <p className="cta-text text-md font-bold lg:text-lg">
                Shoot me an email or connect with me on LinkedIn
            </p>
            <div className="flex gap-8">
                <a
                    href="mailto:jonathancklee@gmail.com"
                    className="group cta-button flex items-center gap-2"
                >
                    <Email
                        height={"32px"}
                        width={"32px"}
                        className="fill-secondary transition-colors group-hover:fill-[#EA4335]"
                    />
                    <span className="font-bold">Email</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/jonathan-lee-97bbb9207/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cta-button flex items-center gap-2"
                >
                    <Linkedin
                        height={"40px"}
                        width={"40px"}
                        className="fill-secondary transition-colors group-hover:fill-[#0077B5]"
                    />
                    <span className="font-bold">LinkedIn</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;
