import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import ChalkFrame from "./ChalkFrame";
import { RULE_PATH_D } from "./heroConstants";

const ContactSection = () => {
  return (
    <section id="contact" className="pt-24 pb-16 text-chalk-100 sm:pt-32">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact
          </h2>
          <div className="rule-chalk mx-auto mt-4 w-24">
            <svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
              <path d={RULE_PATH_D} fill="none" stroke="#F4F1E8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="card-chalk relative mx-auto mt-10 max-w-lg rounded-sm bg-board-900 p-8 pt-20 text-center shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:p-10 sm:pt-24"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ChalkFrame />
          <svg className="envelope-flap" viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M4,5 C60,34 72,44 100,50 C128,44 142,32 196,4" fill="none" stroke="#F4F1E8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="relative text-lg font-semibold text-chalk-100">Get in touch</p>
          <p className="relative mt-3 text-chalk-400">The fastest way to reach me is by email.</p>
          <a
            href="mailto:nigam21nir@gmail.com"
            className="btn-chalk relative mt-8 h-12 px-8 font-semibold text-chalk-yellow-500 transition-colors duration-300 hover:text-chalk-yellow-400"
          >
            <ChalkFrame variant="button" />
            <span className="relative">Send an Email</span>
          </a>
          <div className="relative mt-6 flex items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/nigam-niraula-564208215"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-chalk-400 transition-colors duration-300 hover:text-chalk-yellow-500"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/ninix07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-chalk-400 transition-colors duration-300 hover:text-chalk-yellow-500"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;