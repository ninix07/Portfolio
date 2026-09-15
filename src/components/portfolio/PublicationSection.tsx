import { ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { PUBLICATIONS } from "./constants";
import { RULE_PATH_D } from "./heroConstants";
import ChalkFrame from "./ChalkFrame";

const PublicationSection = () => {
  return (
    <section id="publications" className="py-24 text-chalk-100 sm:py-32">

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Publications
          </h2>
          <div className="rule-chalk mx-auto mt-4 w-24">
            <svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
              <path d={RULE_PATH_D} fill="none" stroke="#F4F1E8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        <div className="mx-auto mt-10 max-w-5xl space-y-16">
          {PUBLICATIONS.map((pub, index) => (
            <motion.div
              key={index}
              className={`pin-note card-chalk rounded-sm p-6 shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:p-8 ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <ChalkFrame stroke="#2A2015" />
              <div className="pin-mark" />

              <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column: Metadata */}
                <div className="lg:col-span-1">
                  <div className="mb-4 flex items-center gap-3">
                    <FileText className="h-5 w-5 flex-shrink-0 text-ink-600" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-ink-600">{pub.conference}</p>
                  </div>
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-chalk inline-flex items-center gap-1.5 font-semibold text-ink-900"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Read Paper
                  </a>
                </div>

                {/* Right Column: Content */}
                <div className="lg:col-span-2">
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink-600">
                    {pub.type}
                  </span>
                  <h3 className="mb-3 mt-1 font-display text-2xl leading-tight text-ink-900 sm:text-3xl">
                    {pub.title}
                  </h3>
                  <p className="max-w-none text-ink-600">{pub.description}</p>
                  <div className="mt-6 pt-5">
                    <div className="rule-chalk mb-5">
                      <svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
                        <path d={RULE_PATH_D} fill="none" stroke="#2A2015" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {pub.keywords.map((keyword) => (
                        <span key={keyword} className="font-mono text-xs italic text-ink-600">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationSection;