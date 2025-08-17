import { useEffect } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Discography from "./components/Discography";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"

import "./styles/base.css";
import "./styles/navbar.css"

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Discography />
      <Contact />
    </>
  );
}

export default App;
