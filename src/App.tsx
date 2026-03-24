import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";

function App() {
    return (
        <div className="bg-background text-text relative min-h-screen overflow-clip px-6 md:px-12">
            <Navbar />
            <main>
                <Hero />
                <About />
            </main>
        </div>
    );
}

export default App;
