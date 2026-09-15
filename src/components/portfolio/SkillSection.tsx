import { motion, Variants } from "framer-motion";
import { RULE_PATH_D } from "./heroConstants";
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

const itemVariants :Variants = {
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
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Skills
          </h2>
          <div className="rule-chalk mx-auto mt-4 w-24">
            <svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
              <path d={RULE_PATH_D} fill="none" stroke="#F4F1E8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        {/* Written straight on the board: two ruled columns, no card boxes —
            a dashed chalk grid instead of a stack of panels. */}
        <motion.div
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 divide-y divide-dashed divide-board-700 border-y border-dashed border-board-700 sm:grid-cols-2 sm:divide-x sm:divide-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="p-8">
              <div className="flex items-baseline gap-3">
                <category.icon className="h-5 w-5 flex-shrink-0 text-chalk-yellow-500" aria-hidden="true" />
                <h3 className="font-display text-2xl text-chalk-100">{category.title}</h3>
              </div>
              <div className="rule-chalk my-4 max-w-[10rem]">
                <svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d={RULE_PATH_D} fill="none" stroke="#F4F1E8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-mono text-sm leading-loose text-chalk-400">
                {category.skills.map((skill, i) => (
                  <span key={skill.name}>
                    {i > 0 && <span className="mx-2 text-chalk-yellow-500">&middot;</span>}
                    {skill.name}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;