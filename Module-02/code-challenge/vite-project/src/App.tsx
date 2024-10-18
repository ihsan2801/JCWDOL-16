import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </Router>
  );
};

export default App;