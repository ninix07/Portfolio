import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactDetails = [
  { 
    icon: Mail, 
    value: "nigam21nir@gmail.com", 
    href: "mailto:nigam21nir@gmail.com",
    ariaLabel: "Email"
  },
  { 
    icon: Linkedin, 
    value: "LinkedIn", 
    href: "https://linkedin.com/in/nigam-niraula-564208215",
    ariaLabel: "LinkedIn Profile"
  },
  { 
    icon: Github, 
    value: "GitHub", 
    href: "https://github.com/ninix07",
    ariaLabel: "GitHub Profile" 
  },
  { 
    icon: MapPin, 
    value: "Sallaghari, Nepal", 
    href: "https://maps.google.com/?q=SallaGhari,+Bhaktapur",
    ariaLabel: "Location on Map"
  },
];

const ContactSection = () => {
  return (
    // --- FIX HERE: Changed py-24 sm:py-32 to pt-24 pb-16 sm:pt-32 ---
    <section id="contact" className="pt-24 pb-16 text-white sm:pt-32">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Have a project in mind or want to connect? I'm always open to discussing new opportunities and innovative ideas.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-xl sm:p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-center">
            <p className="text-lg font-semibold text-slate-200">Get in Touch</p>
            <p className="mt-2 text-slate-400">The fastest way to reach me is by email.</p>
            <a 
              href="mailto:nigam21nir@gmail.com" 
              className="group relative mt-6 inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-violet-600 px-8 font-medium text-white transition-all duration-300 hover:bg-violet-700"
            >
              <span className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-45 transform bg-white opacity-20 transition-all duration-500 ease-out group-hover:translate-x-0"></span>
              <Mail className="mr-2 h-5 w-5" />
              <span>Send an Email</span>
            </a>
          </div>

          <div className="my-8 flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-zinc-800"></div>
            <span className="text-sm text-slate-500">OR</span>
            <div className="h-px flex-1 bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {contactDetails.map(({ icon: Icon, value, href, ariaLabel }) => (
              <a
                key={value}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="group flex items-center gap-4 rounded-lg p-4 transition-colors duration-300 hover:bg-slate-800/50"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-slate-400 transition-colors duration-300 group-hover:border-violet-500/50 group-hover:text-violet-400">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-200 transition-colors duration-300 group-hover:text-white">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;