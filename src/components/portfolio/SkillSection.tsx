import { motion } from "framer-motion";
import {
  // Main Categories
  Brain, Laptop, Rocket, Settings,
  // AI & Research
  Network, Eye, Cpu, Code, Zap, Target,
  // Software Development
  FileCode2, Globe, Smartphone, Server, Database, Hash, Shield, Palette,
  // MLOps & Platforms
  GitBranch, Container, Cloud, Bot, HardDrive,
  // Tools & Ecosystem
  BookOpen, Terminal, Figma, Send
} from "lucide-react";

// --- Data is perfectly fine, no changes needed here ---
const skillCategories = [
  {
    title: "AI & Research",
    icon: Brain,
    skills: [
      { name: "Deep Learning", icon: Network },
      { name: "Computer Vision", icon: Eye },
      { name: "OpenCV", icon: Cpu },
      { name: "TensorFlow", icon: Code },
      { name: "PyTorch", icon: Zap },
      { name: "Scikit-learn", icon: Target },
      { name: "Reinforcement Learning", icon: Target },
      { name: "Diffusion Models", icon: Eye },
    ]
  },
  {
    title: "Software Development",
    icon: Laptop,
    skills: [
      { name: "Python", icon: FileCode2 },
      { name: "JavaScript", icon: Globe },
      { name: "CSS / Sass", icon: Palette },
      { name: "React / Native", icon: Smartphone },
      { name: "Node.js / Express", icon: Server },
      { name: "SQL / MySQL", icon: Database },
      { name: "C++", icon: Hash },
      { name: "MongoDB", icon: Database }
    ]
  },
  {
    title: "MLOps & Platforms",
    icon: Rocket,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "Google Cloud", icon: Cloud },
      { name: "Linux", icon: HardDrive },
      { name: "Google ADK", icon: Bot },
    ]
  },
  {
    title: "Tools & Ecosystem",
    icon: Settings,
    skills: [
      { name: "VS Code", icon: Terminal },
      { name: "Jupyter", icon: BookOpen },
      { name: "Figma", icon: Figma },
      { name: "Postman", icon: Send },
      { name: "Pandas & NumPy", icon: Code },
      { name: "Bash", icon: Terminal }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SkillsSection = () => {
  return (
    
    <section id="skills" className="py-24 sm:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Technical{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Skillset
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            A curated collection of tools and technologies I use to build modern, intelligent applications.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/50"
            >
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-violet-500/20 to-zinc-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-violet-400">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1 text-sm font-medium text-slate-300 transition-colors hover:bg-violet-600/30 hover:text-violet-300"
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    <skill.icon className="h-4 w-4" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;