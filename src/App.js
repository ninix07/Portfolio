import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Contact from "./components/contact";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App" id="no-scroll">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
