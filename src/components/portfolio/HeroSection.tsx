import { Mail, Linkedin, Github, Download } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import CV_PDF from "@/assets/Nigam-Niraula.pdf"; // Make sure this path is correct

const socialLinks = [
  { icon: Mail, href: "mailto:nigam21nir@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/nigam-niraula-564208215", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/ninix07", label: "GitHub" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  return (
    // --- FIX HERE: Removed background color, relative/overflow, and old aurora divs ---
    <section className="flex min-h-screen items-center justify-center p-4">
      <div className="container relative z-10 mx-auto">
        <motion.div
          className="grid max-w-6xl mx-auto grid-cols-1 items-center gap-12 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side: Content */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.h1
              className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
              variants={fadeInUp}
            >
              Nigam{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                Niraula
              </span>
            </motion.h1>

            <motion.p className="text-xl font-semibold text-violet-300 md:text-2xl" variants={fadeInUp}>
              Machine Learning Engineer & AI Researcher
            </motion.p>

            <motion.p className="mx-auto max-w-xl text-slate-400 lg:mx-0" variants={fadeInUp}>
              Specializing in Computer Vision, Deep Learning, and Agentic AI Systems. Building next-gen AI solutions that transform how we interact with technology.
            </motion.p>
            
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <a
                href={CV_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-violet-600 px-6 font-medium text-white transition-all duration-300 hover:bg-violet-700"
              >
                <span className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-45 transform bg-white opacity-20 transition-all duration-500 ease-out group-hover:translate-x-0"></span>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>

              <a href="#contact" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-slate-700 bg-transparent px-6 font-medium text-slate-200 transition-colors duration-300 hover:border-violet-500 hover:bg-slate-800/50">
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-5 pt-4 lg:justify-start"
              variants={fadeInUp}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-slate-400 transition-colors duration-300 hover:text-violet-400"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-8 w-8" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <motion.div className="relative mx-auto w-80 lg:w-96" variants={fadeInUp}>
            <div className="relative">
              <div className="absolute -inset-1.5 animate-[spin_6s_linear_infinite] rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-500 to-violet-600"></div>
              <div className="relative h-80 w-80 overflow-hidden rounded-xl bg-zinc-900 lg:h-96 lg:w-96">
                <img
                  src={profilePhoto}
                  alt="Nigam Niraula"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-full border border-slate-700 bg-zinc-900/80 px-4 py-2 text-sm backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
              <span className="text-slate-200">Available for hire</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;