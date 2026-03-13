import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";

function App() {
    return (
        <div className="relative min-h-screen bg-(--color-background) px-6 text-(--color-text) md:px-12">
            <header className="sticky top-0 z-10">
                <Navbar />
            </header>
            <main>
                <Hero />
                <About />
            </main>
        </div>
    );
}

export default App;
