import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
    return (
        <div className="bg-background text-text relative min-h-screen overflow-clip px-6 md:px-12">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
            </main>
        </div>
    );
}

export default App;
