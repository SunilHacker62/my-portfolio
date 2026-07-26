import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Contact />

      <Footer />

      <ScrollTop />

      <ThemeToggle />
    </>
  );
}

export default App;
