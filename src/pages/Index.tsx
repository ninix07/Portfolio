import Navigation from "../../src/components/portfolio/Navigation";
import HeroSection from "../../src/components/portfolio/HeroSection";
import SkillsSection from "../../src/components/portfolio/SkillSection";
import ProjectsSection from "../../src/components/portfolio/ProjectSection";
import PublicationSection from "../../src/components/portfolio/PublicationSection";
import JourneySection from "../../src/components/portfolio/JourneySection";
import CertificationsAndLeadership from "../../src/components/portfolio/CertificationsAndLeadership";
import ContactSection from "../../src/components/portfolio/ContactSetion";
import Footer from "@/components/portfolio/Footer";



const Index = () => {
  return (
    <>
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <section id="hero">
        <HeroSection />
      </section>
      <PublicationSection />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsAndLeadership />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;