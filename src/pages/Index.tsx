import Navigation from "../../src/components/portfolio/Navigation";
import HeroSection from "../../src/components/portfolio/HeroSection";
import SkillsSection from "../../src/components/portfolio/SkillSection";
import ProjectsSection from "../../src/components/portfolio/ProjectSection";
import PublicationSection from "../../src/components/portfolio/PublicationSection";
import JourneySection from "../../src/components/portfolio/JourneySection";
import ContactSection from "../../src/components/portfolio/ContactSetion";
import Footer from "@/components/portfolio/Footer";



const Index = () => {
  return (
    <>
      <Navigation />
      
      
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="experience">
          <JourneySection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="publications">
          <PublicationSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      
    </>
  );
};

export default Index;