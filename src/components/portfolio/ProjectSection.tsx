import { Github, Star, TrendingUp, BookOpen, Code } from "lucide-react";
import { motion, Variants } from "framer-motion";
import ChalkFrame from "./ChalkFrame";
import { RULE_PATH_D } from "./heroConstants";

// Assuming you have these assets imported
import autoffic from "@/assets/projects/autoffic.jpg";
import prabigya from "@/assets/projects/prabigya.jpg";
import ayureye from "@/assets/projects/ayureye.jpg";
import farmApp from "@/assets/projects/farm-app.jpg";
import prophesy from "@/assets/projects/prophesy.jpg";
import swiftcart from "@/assets/projects/swiftcart.jpg";

// --- DATA UPDATED BASED ON YOUR CV ---
const projects = [
  {
    title: "Autoffic",
    description: "Automating traffic flow at intersections by controlling traffic lights using Computer Vision and Reinforcement Learning.",
    technologies: ["Computer Vision", "Reinforcement Learning", "Python"],
    category: "AI/ML",
    image: autoffic,
    featured: true,
    status: "Research",
    repoUrl: "https://github.com/Autoffic", // Replace with your actual repo URL
  },
  {
    title: "Prabigya",
    description: "A VS Code extension that suggests variable names based on comments, using an LLM (Bard) to enhance code readability.",
    technologies: ["LLM", "VS Code API", "Bard API"],
    category: "Developer Tools",
    image: prabigya,
    featured: true,
    status: "Beta",
    repoUrl: "https://github.com/Prabigyaa",
  },
  {
    title: "Ayureye",
      description: "A Computer-Aided Detection and Diagnosis (CAD) system that detects COPD, implemented using React, Django, and the YOLO architecture.",
    technologies: ["YOLO", "React", "Django", "Medical AI"],
    category: "Healthcare AI",
    image: ayureye,
    featured: true,
    status: "Research",
    repoUrl: "https://github.com/earthPerson-001/AyurEye-Gen2",
  },
  {
    title: "SwiftCart",
      description: "An e-commerce application built with the MERN stack, providing a platform for vendors to list products and customers to purchase and review items.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web App",
    image: swiftcart,
    featured: false,
    status: "Beta",
    repoUrl: "https://github.com/ninix07/SwiftCart",
  },
  {
    title: "Prophesy",
    description: "A battery monitoring system powered by Rust and ML that monitors and predicts battery status using neural networks and regression.",
    technologies: ["Rust", "Machine Learning", "Neural Networks"],
    category: "System",
    image: prophesy,
    featured: false,
    status: "Development",
    repoUrl: "https://github.com/earthPerson-001/prophesy",
  },
  {
    title: "Farm App",
      description: "An inventory management app for chicken farms, made with React Native to manage eggs, chicken, feed, water, and light.",
    technologies: ["React Native", "Mobile Dev", "Inventory Mgmt"],
    category: "Mobile App",
    image: farmApp,
    featured: false,
    status: "Production",
    repoUrl: "https://github.com/KALPREX-ai/kukhuri_farm_frontend",
  },
];


const statusConfig = {
  Production: {
    icon: <Star className="h-4 w-4" aria-hidden="true" />,
    className: "bg-green-400/10 text-green-400 border-board-700",
  },
  Beta: {
    icon: <TrendingUp className="h-4 w-4" aria-hidden="true" />,
    className: "bg-sky-400/10 text-sky-400 border-board-700",
  },
  Research: {
    icon: <BookOpen className="h-4 w-4" aria-hidden="true" />,
    className: "bg-chalk-yellow-500/10 text-chalk-yellow-500 border-board-700",
  },
  Development: {
    icon: <Code className="h-4 w-4" aria-hidden="true" />,
    className: "bg-orange-400/10 text-orange-400 border-board-700",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants :Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectsSection = () => {
  return (
   
    <section id="projects" className="py-24 sm:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Projects
          </h2>
          <div className="rule-chalk mx-auto mt-4 w-24">
            <svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
              <path d={RULE_PATH_D} fill="none" stroke="#F4F1E8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={index % 3 === 1 ? "lg:mt-10" : index % 3 === 2 ? "lg:-mt-4" : ""}
              >
                <ProjectCard project={project} tilt={index % 2 === 0 ? "-rotate-1" : "rotate-1"} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- ProjectCard sub-component remains unchanged, it is styled correctly ---
const ProjectCard = ({ project, tilt }: { project: (typeof projects)[number]; tilt: string }) => {
    const status = statusConfig[project.status];
    return (
        <div className={`card-chalk group flex h-full flex-col overflow-hidden rounded-sm bg-board-900 p-4 shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] ${tilt}`}>
            <ChalkFrame />
            <div className="binder-clip clip-left">
                <svg viewBox="0 0 26 18" width="26" height="18" aria-hidden="true">
                    <path d="M4,2 L22,2 L24,9 L19,16 L7,16 L2,9 Z" fill="#212D1F" stroke="#F4F1E8" strokeWidth="1.2" strokeLinejoin="round" />
                    <ellipse cx="13" cy="9" rx="3" ry="2.4" fill="none" stroke="#F4F1E8" strokeWidth="1" />
                </svg>
            </div>
            <div className="binder-clip clip-right">
                <svg viewBox="0 0 26 18" width="26" height="18" aria-hidden="true">
                    <path d="M4,2 L22,2 L24,9 L19,16 L7,16 L2,9 Z" fill="#212D1F" stroke="#F4F1E8" strokeWidth="1.2" strokeLinejoin="round" />
                    <ellipse cx="13" cy="9" rx="3" ry="2.4" fill="none" stroke="#F4F1E8" strokeWidth="1" />
                </svg>
            </div>
            <div className="relative mb-4 h-48 overflow-hidden rounded-sm">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={192}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {project.featured && (
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-board-700 bg-amber-400/10 px-2.5 py-1 text-xs font-semibold text-amber-300">
                        <Star className="h-3 w-3" aria-hidden="true" />
                        Featured
                    </div>
                )}
            </div>
            <div className="flex flex-1 flex-col p-2">
                <div className="flex items-center justify-between">
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-chalk-yellow-500">
                        {project.category}
                    </p>
                    <div className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${status.className}`}>
                        {status.icon}
                        {project.status}
                    </div>
                </div>
                <h3 className="mt-3 font-display text-xl text-chalk-100">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-chalk-400">{project.description}</p>
                <div className="my-4 flex flex-wrap gap-x-3 gap-y-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="font-mono text-xs text-chalk-400">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex gap-3 pt-2">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-chalk h-10 flex-1 gap-2 text-sm font-semibold text-chalk-yellow-500 transition-colors duration-300 hover:text-chalk-yellow-400">
                        <ChalkFrame variant="button" />
                        <Github className="relative h-4 w-4" aria-hidden="true" />
                        <span className="relative">Source</span>
                    </a>
                </div>
            </div>
        </div>
    );
};


export default ProjectsSection;