import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="h-screen w-full text-stone-700">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
