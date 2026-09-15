// ==========================================
// JOURNEY SECTION CONSTANTS
// ==========================================

// ==========================================
// TYPES
// ==========================================

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
  cgpa: string;
}
export interface Publication {
  title: string;
  conference: string;
  year: string;
  type: string;
  description: string;
  keywords: string[];
  paperUrl: string;
}

export interface Certification {
  title: string;
  issuer: string;
  type: string;
}

export interface TimelineEvent {
  type: 'experience' | 'education';
  title?: string;
  company?: string;
  location?: string;
  period: string;
  description?: string[];
  degree?: string;
  institution?: string;
  details?: string;
  cgpa?: string;
}

// ==========================================
// EXPERIENCE DATA
// ==========================================

export const EXPERIENCES: Experience[] = [
  {
    title: "Part Time Lecturer",
    company: "The Westminster College",
    location: "Lalitpur, Nepal",
    period: "September 2025 - Present",
    description: [
      "Teaching Python programming fundamentals to first-year Computer Science students.",
    ],
  },
  {
    title: "Associate Machine Learning Engineer",
    company: "SecurityPal",
    location: "Kathmandu, Nepal",
    period: "May 2025 – Nov 2025",
    description: [
      "Built agentic AI systems using Google ADK, focusing on modular agent design and goal-driven behavior.",
      "Integrated A2A (Agent-to-Agent) communication to enable autonomous coordination and task execution.",
      "Implemented a graph-based natural language representation framework to enhance retrieval precision and context awareness in Retrieval-Augmented Generation (RAG) systems."
    ],
  },
  {
    title: "Research And Development Engineer",
    company: "SecurityPal",
    location: "Kathmandu, Nepal",
    period: "Nov 2025 – Present",
    description: [
      "Designed and implemented a diffusion-based text generation model that probabilistically reasons over contextual embeddings to answer complex, context-aware questions.",
      "Built a fully autonomous, end to end report generation pipeline that transforms raw, unstructured data into coherent, publication ready narratives and charts with zero human intervention."
    ],
  },
  {
    title: "Research Intern",
    company: "AI Lab IITH",
    location: "Hyderabad, India",
    period: "Aug 2024 – May 2025",
    description: [
      "Conducted research on Diffusion Models and Conditional Diffusion for Indian-styled content generation.",
    ],
  },
  {
    title: "Research Intern",
    company: "Dynamic Image Tagging Project",
    location: "Dhulikhel, Nepal",
    period: "Nov 2023 – Aug 2024",
    description: [
      "Developed image detection models using CNNs and image generation systems for specific tags using GANs."
    ],
  },
];

// ==========================================
// EDUCATION DATA
// ==========================================

export const EDUCATION: Education[] = [
  {
    degree: "B. Tech in Computer Science",
    institution: "Indian Institute of Technology, Hyderabad",
    period: "2024 – May 2025",
    details: "Final Year Academic Exchange Student from KU.",
    cgpa: "8.83/10",
  },
  {
    degree: "Bachelors in Computer Engineering",
    institution: "Kathmandu University",
    period: "2020 – May 2025",
    details: "Primary undergraduate degree.",
    cgpa: "3.96/4",
  },
];

// ==========================================
// CERTIFICATIONS DATA
// ==========================================

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Microdegree™ in Artificial Intelligence",
    issuer: "Fusemachines AI Fellowship 2024",
    type: "Fellowship"
  },
  {
    title: "Supervised Machine Learning",
    issuer: "Dr. Andrew NG, Coursera",
    type: "Course"
  },
  {
    title: "Programming Fundamentals",
    issuer: "Duke University, Coursera",
    type: "Course"
  },
  {
    title: "Effective Public Speaking",
    issuer: "JCI Kavre",
    type: "Training"
  }
];

//==========================================
// PUBLICATIONS DATA
//==========================================

export const PUBLICATIONS: Publication[] = [
 
  {
     title: "MIDAS: Adaptive Proxy Middleware for Mitigating Metadata Hotspots in HPC I/O at Scale",
     conference: "CloudCom 2025 The 16th IEEE International Conference on Cloud Computing Technology and Science",
     year: "2025",
     type: "Conference Paper",
     description: "The paper proposes MIDAS, a backend-agnostic middleware that adaptively balances and caches metadata requests to reduce hotspots in distributed storage systems, improving scalability and tail latency under bursty workloads.",
     keywords: ["Metadata Servers", "HPC I/O", "Middleware", "Distributed Systems"],
     paperUrl: "https://arxiv.org/abs/2511.18124", // Add the actual link to the paper
  },
   {
    title: "Hybrid Approach for Enhancing Traffic Signal Control with Computer Vision and Reinforcement Learning",
    conference: "2023 14th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
    year: "2023",
    type: "Conference Paper",
    description: "This research presents a novel hybrid approach combining Computer Vision and Reinforcement Learning techniques to optimize traffic signal control systems, improving traffic flow efficiency at intersections.",
    keywords: ["Computer Vision", "Reinforcement Learning", "Traffic Control", "Smart Cities"],
    paperUrl: "https://ieeexplore.ieee.org/document/10307312", // Add the actual link to the paper

  }
];

// ==========================================
// UI CONSTANTS
// ==========================================

export const SECTION_TITLE = "My Professional Journey";

// Animation durations (in seconds)
export const ANIMATION_DURATION_DEFAULT = 0.6;
export const ANIMATION_DURATION_STAGGER = 0.2;
export const ANIMATION_DURATION_ITEM = 0.6;
export const ANIMATION_EASE = "easeOut";

// Viewport settings
export const VIEWPORT_ONCE = true;
export const VIEWPORT_AMOUNT_DEFAULT = 0.5;
export const VIEWPORT_AMOUNT_STAGGER = 0.2;

// ==========================================
// STYLE CONSTANTS
// ==========================================

export const STYLES = {
  section: "py-24 text-chalk-100 sm:py-32",
  container: "container relative z-10 mx-auto px-4",
  titleWrapper: "mx-auto mb-8 max-w-4xl text-center",
  title: "font-display text-4xl font-semibold tracking-tight sm:text-5xl",
  timelineWrapper: "mx-auto max-w-4xl",
  timelineLine: "absolute left-4 top-4 h-full w-px bg-[repeating-linear-gradient(to_bottom,rgba(244,241,232,0.35)_0px,rgba(244,241,232,0.35)_5px,transparent_5px,transparent_11px)] md:left-1/2 md:-translate-x-1/2",
  card: {
    wrapper: "w-full pl-12 md:w-5/12 md:pl-0",
    base: "card-chalk rounded-sm bg-board-900 p-5 shadow-[0_10px_20px_rgba(0,0,0,0.3)]",
    period: "mb-2 font-mono text-xs font-medium uppercase tracking-wider text-chalk-yellow-500",
    title: "mb-1 text-xl font-bold text-chalk-100",
    subtitle: "mb-4 text-sm font-medium text-chalk-400",
    description: "space-y-2 text-sm text-chalk-400 list-disc pl-4",
    details: "text-sm text-chalk-400",
    cgpa: "mt-2 flex items-center gap-2 text-sm font-semibold text-chalk-100",
    cgpaHighlight: "text-chalk-yellow-500",
  },
  timelineDot: {
    wrapper: "absolute left-4 top-5 h-5 w-5 -translate-x-1/2 md:relative md:left-0 md:top-0 md:mx-4 md:flex md:w-2/12 md:translate-x-0 md:items-start md:justify-center",
    circle: "relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-board-900 ring-4 ring-chalk-yellow-500",
    icon: "h-4 w-4 text-chalk-100",
  },
} as const;

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Parses start date from period string for sorting
 */
export const parseStartDate = (period: string): Date => {
  const startDateStr = period.split('–')[0].trim();
  return new Date(startDateStr);
};

/**
 * Gets timeline events sorted by start date (newest first)
 */
export const getSortedTimelineEvents = (): TimelineEvent[] => {
  return [
    ...EXPERIENCES.map(item => ({ ...item, type: 'experience' as const })),
    ...EDUCATION.map(item => ({ ...item, type: 'education' as const }))
  ].sort((a, b) => parseStartDate(b.period).getTime() - parseStartDate(a.period).getTime());
};

