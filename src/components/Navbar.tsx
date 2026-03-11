function Navbar() {
    return (
        <nav className="flex justify-between py-6 text-xl font-bold">
            <a href="/">
                <span>JCKL</span>
            </a>

            <div className="hidden gap-6 md:flex">
                <a href="#about">
                    <span>About</span>
                </a>
                <a href="#projects">
                    <span>Projects</span>
                </a>
                <a href="#tech">
                    <span>Tech</span>
                </a>
                <a href="#contact">
                    <span>Contact</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
