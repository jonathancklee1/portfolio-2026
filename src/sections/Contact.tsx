import SectionHeader from "../components/SectionHeader";
import Email from "../assets/icons/email.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";

function Contact() {
    return (
        <section className="flex flex-col gap-6 lg:gap-8" id="contact">
            <SectionHeader text="Contact Me" />
            <div className="bg-text h-px w-full"></div>
            <p className="text-md font-bold lg:text-lg">
                Shoot me an email or connect with me on LinkedIn
            </p>
            <div className="flex gap-8">
                <a
                    href="mailto:jonathancklee@gmail.com"
                    className="flex items-center gap-2"
                >
                    <Email
                        height={"32px"}
                        width={"32px"}
                        className="fill-secondary transition-colors hover:fill-[#EA4335]"
                    />
                    <span className="font-bold">Email</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/jonathan-lee-97bbb9207/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                >
                    <Linkedin
                        height={"40px"}
                        width={"40px"}
                        className="fill-secondary transition-colors hover:fill-[#0077B5]"
                    />
                    <span className="font-bold">LinkedIn</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;
