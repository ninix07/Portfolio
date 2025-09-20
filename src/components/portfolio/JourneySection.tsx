import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- Data from your CV ---
const experiences = [
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
        period: "May 2025 – Present",
        description: [
            "Built agentic AI systems using Google ADK, focusing on modular agent design and goal-driven behavior.",
            "Integrated A2A (Agent-to-Agent) communication to enable autonomous coordination and task execution.",
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
        description: ["Developed image detection models using CNNs and image generation systems for specific tags using GANs."],
    },
];

const education = [
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

const certifications = [
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

// --- Corrected Sorting Logic ---
const parseStartDate = (period) => {
    const startDateStr = period.split('–')[0].trim();
    return new Date(startDateStr);
};

const timelineEvents = [
    ...experiences.map(item => ({ ...item, type: 'experience' })),
    ...education.map(item => ({ ...item, type: 'education' }))
].sort((a, b) => parseStartDate(b.period).getTime() - parseStartDate(a.period).getTime());


// --- Main Component ---
const JourneySection = () => {
    return (
        <section id="experience" className=" py-24 text-white sm:py-32">
            

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    className="mx-auto mb-20 max-w-4xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        My Professional{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                            Journey
                        </span>
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        A timeline of my academic achievements, professional experience, and key certifications.
                    </p>
                </motion.div>

                <div className="mx-auto max-w-4xl">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-4 h-full w-0.5 bg-zinc-800 md:left-1/2 md:-translate-x-1/2"></div>
                        
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                        >
                            {timelineEvents.map((item, index) => (
                                <TimelineItem key={`${item.type}-${index}`} item={item} isLeft={index % 2 !== 0} />
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-24"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="mb-8 text-center text-3xl font-bold text-slate-100">
                            Certifications & Training
                        </h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {certifications.map((cert, index) => (
                                <CertificationCard key={index} cert={cert} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- Sub-components ---
const TimelineItem = ({ item, isLeft }) => {
    const itemVariants :Variants = {
        hidden: { opacity: 0, x: isLeft ? -40 : 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    const Icon = item.type === 'experience' ? Briefcase : GraduationCap;

    return (
        <motion.div className="relative mb-12" variants={itemVariants}>
            <div className={`flex items-start ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Content Card */}
                <div className="w-full pl-12 md:w-5/12 md:pl-0">
                    <div className={`rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-xl ${isLeft ? 'md:text-right' : ''}`}>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-violet-400">{item.period}</p>
                        <h4 className="mb-2 text-lg font-bold text-slate-100">
                            {item.title || item.degree}
                        </h4>
                        <p className="mb-3 text-sm font-medium text-slate-300">
                            {item.company || item.institution}
                        </p>
                        {item.type === 'experience' ? (
                            <ul className={`list-inside space-y-2 text-sm text-slate-400 ${isLeft ? 'md:list-none' : ''}`}>
                                {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                            </ul>
                        ) : (
                            <div>
                                <p className="text-sm text-slate-400">{item.details}</p>
                                <div className={`mt-2 flex items-center gap-2 text-sm font-semibold text-slate-200 ${isLeft ? 'md:justify-end' : ''}`}>
                                    <Award className="h-4 w-4 text-amber-400" /> CGPA: {item.cgpa}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Center Dot */}
                <div className="absolute left-4 top-5 h-5 w-5 -translate-x-1/2 md:relative md:left-0 md:top-0 md:mx-4 md:flex md:w-2/12 md:translate-x-0 md:items-start md:justify-center">
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 ring-4 ring-violet-500">
                        <Icon className="h-4 w-4 text-white" />
                    </div>
                </div>
                <div className="hidden md:block md:w-5/12"></div>
            </div>
        </motion.div>
    );
};

const CertificationCard = ({ cert }) => (
    <div className="group flex items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/50 hover:bg-zinc-900">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-slate-400 transition-colors duration-300 group-hover:border-violet-500/50 group-hover:text-violet-400">
            <BookOpen className="h-5 w-5" />
        </div>
        <div>
            <h4 className="font-semibold text-slate-100">{cert.title}</h4>
            <p className="text-sm text-slate-400">{cert.issuer}</p>
        </div>
        <span className="ml-auto whitespace-nowrap rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-300">
            {cert.type}
        </span>
    </div>
);

export default JourneySection;