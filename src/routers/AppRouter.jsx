import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
