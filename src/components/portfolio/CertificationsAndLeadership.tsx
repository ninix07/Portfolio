import { BookOpen, Award, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";

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

const leadership = [
 
];

const CertificationsAndLeadership = () => {
    return (
        <section id="certifications" className="py-24 text-white sm:py-32">
            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    className="mx-auto mb-16 max-w-4xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Certifications &{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-slate-500 bg-clip-text text-transparent">
                            Leadership
                        </span>
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Professional certifications and leadership experiences that shaped my growth.
                    </p>
                </motion.div>

                <div className="mx-auto max-w-5xl">
                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-100">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-cyan-400">
                                <Award className="h-5 w-5" />
                            </div>
                            Certifications
                        </h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                            {certifications.map((cert, index) => (
                                <CertificationCard key={index} cert={cert} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Leadership
                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-100">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-violet-400">
                                <Users className="h-5 w-5" />
                            </div>
                            Leadership
                        </h3>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {leadership.map((item, index) => (
                                <LeadershipCard key={index} item={item} />
                            ))}
                        </div>
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
};

const CertificationCard = ({ cert }) => (
    <motion.div
        className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
    >
        <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-slate-400 transition-colors duration-300 group-hover:border-cyan-500/50 group-hover:text-cyan-400">
                <BookOpen className="h-5 w-5" />
            </div>
            <div className="flex-1">
                <h4 className="font-semibold text-slate-100">{cert.title}</h4>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
            </div>
        </div>
        <div className="mt-4">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                {cert.type}
            </span>
        </div>
    </motion.div>
);

const LeadershipCard = ({ item }) => (
    <motion.div
        className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
    >
        <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-slate-400 transition-colors duration-300 group-hover:border-cyan-500/50 group-hover:text-cyan-400">
                <Trophy className="h-5 w-5" />
            </div>
            <div className="flex-1">
                <h4 className="font-semibold text-slate-100">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.organization}</p>
            </div>
        </div>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
            {item.period}
        </p>
        <p className="mt-3 text-sm text-slate-400">
            {item.description}
        </p>
    </motion.div>
);

export default CertificationsAndLeadership;
