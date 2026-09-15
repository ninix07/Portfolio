import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { RULE_PATH_D } from "./heroConstants";
import { CERTIFICATIONS } from "./constants";

const CertificationsAndLeadership = () => {
    return (
        <section id="certifications" className="py-24 text-chalk-100 sm:py-32">
            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    className="mx-auto mb-8 max-w-4xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                        Certifications
                    </h2>
                    <div className="rule-chalk mx-auto mt-4 w-24">
                        <svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
                            <path d={RULE_PATH_D} fill="none" stroke="#F4F1E8" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                </motion.div>

                <div className="mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-10">
                            {CERTIFICATIONS.map((cert, index) => (
                                <CertificationMedallion key={index} cert={cert} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const CertificationMedallion = ({ cert }) => (
    <motion.div
        className="group flex w-40 flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
    >
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-chalk-yellow-500/60 text-chalk-yellow-500 transition-transform duration-300 group-hover:scale-110">
            <BookOpen className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-chalk-yellow-500">{cert.type}</p>
        <h4 className="mt-1 text-sm font-semibold leading-snug text-chalk-100">{cert.title}</h4>
        <p className="mt-1 text-xs text-chalk-400">{cert.issuer}</p>
    </motion.div>
);

export default CertificationsAndLeadership;
