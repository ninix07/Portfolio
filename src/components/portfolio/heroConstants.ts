import { Variants } from "framer-motion";
import { Mail, Linkedin, Github, Download, LucideIcon } from "lucide-react";
import CV_PDF from "@/assets/Nigam-Niraula.pdf";

// ==========================================
// TYPES
// ==========================================

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

// ==========================================
// HERO SECTION CONTENT
// ==========================================

export const NAME_FIRST = "Nigam";
export const NAME_LAST = "Niraula";

export const SUBTITLE_PREFIX = "I am a";
export const SUBTITLE_ITEMS = [
  "AI Researcher",
  2000,
  "Machine Learning Engineer",
  2000,
  "Diffusion & Generative Models",
  2000,
  "Full-Stack AI Developer",
  2000,
  "CS Educator",
  2000,
];


export const HERO_DESCRIPTION =
  "AI researcher and engineer focused on computer vision, diffusion models, and agentic AI systems. I build intelligent, end-to-end solutions grounded in theory, tested in practice, and designed for real users.";

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Mail, href: "mailto:nigam21nir@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/nigam-niraula-564208215", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/ninix07", label: "GitHub" },
];

// ==========================================
// BUTTONS & CTA
// ==========================================

export const CTA_DOWNLOAD_CV = {
  text: "Download CV",
  href: CV_PDF,
  icon: Download,
};

export const CTA_GET_IN_TOUCH = {
  text: "Get In Touch",
  href: "#contact",
};

// ==========================================
// ANIMATION & STYLING
// ==========================================

export const STAGGER_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const FADE_IN_UP_VARIANTS: Variants = {
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

export const STYLES = {
  section: "flex min-h-[90vh] items-center justify-center p-4",
  container: "container relative z-10 mx-auto",
  grid: "grid max-w-6xl mx-auto grid-cols-1 items-center gap-12 lg:grid-cols-2",
  contentWrapper: "space-y-6 text-center lg:text-left",
  title: "text-5xl font-bold leading-tight md:text-6xl lg:text-7xl",
  gradientText: "bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent",
  subtitle: "text-xl font-semibold text-cyan-300 md:text-2xl min-h-[5rem] lg:min-h-0",
  description: " font-semibold text-align-justify mx-auto max-w-xl text-slate-400 lg:mx-0",
  buttonGroup: "flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start",
  primaryButton: "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-cyan-600 px-6 font-medium text-white transition-all duration-300 hover:bg-cyan-700",
  secondaryButton: "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-slate-700 bg-transparent px-6 font-medium text-slate-200 transition-colors duration-300 hover:border-cyan-500 hover:bg-slate-800/50",
  socialGroup: "flex items-center justify-center gap-5 pt-4 lg:justify-start",
  socialLink: "text-slate-400 transition-colors duration-300 hover:text-cyan-400",
  imageWrapper: "relative mx-auto w-80 lg:w-96",
  imageSpinner: "absolute -inset-1.5 animate-[spin_6s_linear_infinite] rounded-2xl bg-gradient-to-r from-cyan-600 via-slate-500 to-cyan-600",
  imageContainer: "relative h-80 w-80 overflow-hidden rounded-xl bg-zinc-900 lg:h-96 lg:w-96",
  image: "h-full w-full object-cover",
  hireBadge: "absolute -bottom-4 -right-4 flex items-center gap-2 rounded-full border border-slate-700 bg-zinc-900/80 px-4 py-2 text-sm backdrop-blur-md",
  hireBadgePing: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75",
  hireBadgeDot: "relative inline-flex h-3 w-3 rounded-full bg-green-500",
} as const;
