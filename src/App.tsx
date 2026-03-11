import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="min-h-screen bg-(--color-background) px-6 text-(--color-text) md:px-12">
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
            </main>
        </div>
    );
}

export default App;
