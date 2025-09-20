import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import CV_PDF from "@/assets/Nigam-Niraula.pdf";

const navigationItems = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Publication", href: "#publications" },
  { label: "Contact", href: "#contact" },
  { label: "View CV", href: CV_PDF, cta: true },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['hero', ...navigationItems.map(item => typeof item.href === 'string' ? item.href.substring(1) : '').filter(id => id && !item.cta)];
      let currentSection = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
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

  const NavLinks = ({ isMobile = false }) => (
    navigationItems.map((item) => {
      const isActive = typeof item.href === 'string' && activeSection === item.href.substring(1);
      
      if (item.cta) {
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm font-medium border border-slate-700 px-4 py-2 rounded-md text-slate-200 transition-colors duration-300 hover:border-violet-500 hover:bg-slate-800/50 ${isMobile ? 'w-full justify-center' : ''}`}
          >
            {item.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        );
      }

      return (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => handleLinkClick(e, item.href)}
          className={`px-3 py-2 rounded-md text-md font-medium transition-colors duration-300 ${
            isActive ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
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
        // --- FIX HERE: Add '|| isMobileMenuOpen' to the condition ---
        (isScrolled || isMobileMenuOpen)
          ? "bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")} className="flex-shrink-0">
            <Logo />
          </a>

          <div className="hidden lg:flex items-center gap-2">
            <NavLinks />
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50"
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
          <NavLinks isMobile={true} />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;