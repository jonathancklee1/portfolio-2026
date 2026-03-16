import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";

function App() {
    return (
        <div className="bg-background text-text relative min-h-screen px-6 md:px-12">
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
