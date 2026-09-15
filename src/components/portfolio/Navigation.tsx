import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import CV_PDF from "@/assets/Nigam-Niraula.pdf";
import ChalkFrame from "./ChalkFrame";

const navigationItems = [
  { label: "Publication", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "View CV", href: CV_PDF, cta: true },
];

// All real sections in document order, including ones (like Certifications)
// that don't get their own nav link — they fall back to the nearest section
// that does, so the nav never highlights nothing (or the wrong thing).
const SECTION_ORDER = ["hero", "publications", "experience", "skills", "projects", "certifications", "contact"];
const SECTION_NAV_FALLBACK: Record<string, string> = { certifications: "projects" };

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Walk sections top-to-bottom and keep the last one whose top has
      // already crossed the threshold line — the section currently under it.
      const threshold = 120;
      let currentSection = "";
      for (const sectionId of SECTION_ORDER) {
        const element = document.getElementById(sectionId);
        if (element && element.getBoundingClientRect().top <= threshold) {
          currentSection = sectionId;
        }
      }
      setActiveSection(SECTION_NAV_FALLBACK[currentSection] ?? currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    if (typeof href === 'string' && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const renderNavLinks = (isMobile = false) => (
    navigationItems.map((item) => {
      const isActive = typeof item.href === 'string' && activeSection === item.href.substring(1);
      
      if (item.cta) {
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-chalk h-9 px-4 text-sm font-semibold text-chalk-yellow-500 transition-colors duration-300 hover:text-chalk-yellow-400 ${isMobile ? 'w-full justify-center' : ''}`}
          >
            <ChalkFrame variant="button" />
            <span className="relative">{item.label}</span>
          </a>
        );
      }

      return (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => handleLinkClick(e, item.href)}
          className={`px-3 py-2 font-mono text-xs uppercase tracking-wide transition-colors duration-300 ${
            isActive ? "text-chalk-yellow-500" : "text-chalk-400 hover:text-chalk-100"
          } ${isMobile ? 'w-full text-left' : ''}`}
        >
          {item.label}
        </a>
      );
    })
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        (isScrolled || isMobileMenuOpen)
          ? "bg-board-950/80 backdrop-blur-lg border-b border-board-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")} className="flex-shrink-0 font-display text-xl text-chalk-100">
            Nigam Niraula
          </a>

          <div className="hidden lg:flex items-center gap-2">
            {renderNavLinks()}
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-chalk-400 hover:text-chalk-100 hover:bg-board-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <motion.div
        className="lg:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-2 pt-2 pb-3 sm:px-3 flex flex-col items-start gap-1">
          {renderNavLinks(true)}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;