import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import Contact from "./sections/Contact";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ReactLenis from "lenis/react";
import { useGLTF } from "@react-three/drei";

function App() {
    gsap.registerPlugin(ScrollTrigger);

    // Pre-load outside the component to cache it immediately
    useGLTF.preload("src/assets/logos/vue.gltf");
    useGLTF.preload("src/assets/logos/typescript.gltf");
    useGLTF.preload("src/assets/logos/react.gltf");
    useGLTF.preload("src/assets/logos/tailwind.gltf");
    useGLTF.preload("src/assets/logos/github.gltf");
    useGLTF.preload("src/assets/logos/html5.gltf");
    useGLTF.preload("src/assets/logos/css3.gltf");
    useGLTF.preload("src/assets/logos/javascript.gltf");
    useGLTF.preload("src/assets/logos/storybook.gltf");
    useGLTF.preload("src/assets/logos/materialui.gltf");
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
