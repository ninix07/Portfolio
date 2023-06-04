import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Footer from "./";
const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <div>
      {/* Render other components */}
      <Home />
      <About />
      <Contact />
      <Projects />
    </div>
  );
};

export default MainPage;
