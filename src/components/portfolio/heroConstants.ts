import { Variants } from "framer-motion";
import CV_PDF from "@/assets/Nigam-Niraula.pdf";

// ==========================================
// HERO SECTION CONTENT
// ==========================================

export const NAME_FIRST = "Nigam";
export const NAME_LAST = "Niraula";

export const KICKER_TEXT = "R&D Engineer at SecurityPal, part-time CS lecturer";
export const ROLE_TEXT = "AI/ML Researcher";

export const HERO_DESCRIPTION =
  "AI researcher and engineer focused on computer vision, diffusion models, agentic AI systems, and healthcare AI. I build intelligent, end-to-end solutions grounded in theory, tested in practice, and designed for real users.";

// ==========================================
// BUTTONS & CTA
// ==========================================

export const CTA_DOWNLOAD_CV = {
  text: "Download CV",
  href: CV_PDF,
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

// The underline path is reused by the chalk-mover animation in index.css —
// keep them in sync if this ever changes.
export const UNDERLINE_PATH_D = "M2,10 C60,16 120,4 180,9 C240,14 300,5 398,11";
export const ROLE_CIRCLE_PATH_D = "M14,36 C10,14 46,4 110,4 C176,4 210,16 206,36 C210,58 174,66 110,66 C44,66 10,58 14,36 Z";
// A gentle hand-drawn horizontal rule — used for in-card dividers (e.g. the
// "Keywords" rule) instead of a plain straight border.
export const RULE_PATH_D = "M2,5 C50,8 100,2 150,6 L198,4";

// The chalk-frame system (see <ChalkFrame />): every card/button border is
// four of these strokes, one per edge, instead of one path stretched with
// preserveAspectRatio="none" over the whole box — a stretched loop skews
// unevenly on anything that isn't square, an edge only stretches along its
// own long axis so the line weight stays honest at any box size.
export const EDGE_WOBBLE_H = "M2,6 C30,2 55,9 80,5 C105,1 130,8 155,4 C175,2 190,7 198,5";
export const EDGE_WOBBLE_V = "M6,2 C2,30 9,55 5,80 C1,105 8,130 4,155 C2,175 7,190 5,198";

export const STYLES = {
  frame: "mt-16 h-[calc(100vh-4rem)] rounded p-3 sm:p-3.5 shadow-[0_8px_20px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#8B6849] via-[#6B4A30] to-[#55391F]",
  board: "hero-board relative h-full rounded-sm shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]",
  section: "flex h-full flex-col overflow-y-auto px-4 py-8 sm:px-8 sm:py-10",
  // One block (grid + tray) with a generous fixed gap between them, rather
  // than pinning them to the top/bottom edges — that just relocates the dead
  // space into one big gap in the middle instead of removing it. Centered
  // only from lg up, where it's known to fit; below that the content can be
  // taller than the frame, and centering an overflowing flex child clips
  // it symmetrically top-and-bottom with no way to scroll to the clipped
  // part — justify-start keeps the whole thing reachable by scrolling.
  container: "container relative z-10 mx-auto flex h-full flex-col justify-start gap-14 lg:justify-center",
  grid: "grid max-w-6xl mx-auto w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16",
  contentWrapper: "space-y-7 text-center lg:text-left",
  kicker: "inline-flex items-center gap-2 font-mono text-sm tracking-wide text-chalk-400 before:h-[8px] before:w-[8px] before:rounded-full before:bg-chalk-yellow-500 before:shadow-[0_0_6px_#D4B15C]",
  title: "hero-name font-display text-6xl leading-tight sm:text-7xl lg:text-8xl text-chalk-100",
  roleLine: "flex justify-center lg:justify-start",
  roleCircle: "relative inline-block px-2 py-1",
  roleCircleSvg: "role-circle-svg absolute -inset-x-4 -inset-y-3 h-[calc(100%+24px)] w-[calc(100%+32px)]",
  roleText: "relative text-2xl font-bold text-chalk-yellow-500 sm:text-3xl",
  description: "mx-auto max-w-2xl text-xl text-chalk-400 leading-relaxed lg:mx-0",
  buttonGroup: "flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-center lg:justify-start",
  primaryButton: "btn-chalk h-14 px-8 text-lg font-semibold text-chalk-yellow-500 transition-colors duration-200 hover:text-chalk-yellow-400",
  secondaryButton: "link-chalk text-lg font-semibold text-chalk-100 transition-colors duration-200 hover:text-chalk-yellow-500",
  imageWrapper: "relative mx-auto w-80 sm:w-[28rem]",
  imageContainer: "portrait-frame relative aspect-square overflow-hidden rounded-full bg-board-900",
  image: "h-full w-full object-cover",
  tray: "relative flex flex-wrap gap-10 border-t border-dashed border-chalk-100/15 pt-6",
  trayItem: "flex items-center gap-3 font-mono text-sm text-chalk-400",
  traySvg: "chalk-svg flex-shrink-0",
  swipeDivider: "chalk-svg mt-3 block h-9 w-full",
} as const;
