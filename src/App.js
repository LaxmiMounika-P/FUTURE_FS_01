import "./App.css";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Education from "./components/Education";

import Achievements from "./components/Achievements";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />

      <About />

      <Achievements />
      <Education />
      <Skills />

      <Projects />

      <Certificates />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
