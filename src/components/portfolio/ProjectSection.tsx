import { ExternalLink, Github, Star, TrendingUp, BookOpen, Code } from "lucide-react";
import { motion } from "framer-motion";

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
    liveUrl: "#", // Replace with your actual live URL
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
    liveUrl: "#",
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
    liveUrl: "#",
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
    liveUrl: "#",
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
    liveUrl: "#",
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
    liveUrl: "#",
  },
];


const statusConfig = {
  Production: {
    icon: <Star className="h-4 w-4" />,
    className: "bg-green-400/10 text-green-400 border-green-400/30",
  },
  Beta: {
    icon: <TrendingUp className="h-4 w-4" />,
    className: "bg-sky-400/10 text-sky-400 border-sky-400/30",
  },
  Research: {
    icon: <BookOpen className="h-4 w-4" />,
    className: "bg-violet-400/10 text-violet-400 border-violet-400/30",
  },
  Development: {
    icon: <Code className="h-4 w-4" />,
    className: "bg-orange-400/10 text-orange-400 border-orange-400/30",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
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
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Portfolio of{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            A selection of my work, demonstrating practical applications of my skills in AI, web, and mobile development.
          </p>
        </motion.div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- ProjectCard sub-component remains unchanged, it is styled correctly ---
const ProjectCard = ({ project }) => {
    const status = statusConfig[project.status];
    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/50">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/20 to-zinc-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {project.featured && (
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur-sm">
                        <Star className="h-3 w-3" />
                        Featured
                    </div>
                )}
            </div>
            <div className="flex flex-1 flex-col p-2">
                <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wider text-violet-400">
                        {project.category}
                    </p>
                    <div className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${status.className}`}>
                        {status.icon}
                        {project.status}
                    </div>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{project.description}</p>
                <div className="my-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex gap-3 pt-2">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-md bg-violet-600 text-white transition-colors duration-300 hover:bg-violet-700">
                        <div className="flex h-10 w-full items-center justify-center gap-2">
                        <Github className="h-4 w-4" /> Source
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};


export default ProjectsSection;