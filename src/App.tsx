import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import Contact from "./sections/Contact";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ReactLenis from "lenis/react";

function App() {
    gsap.registerPlugin(ScrollTrigger);

    return (
        <>
            <ReactLenis root />
            <div className="bg-background text-text relative min-h-screen overflow-clip px-6 md:px-12">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Projects />
                    <Technologies />
                    <Contact />
                </main>
            </div>
        </>
    );
}

export default App;
