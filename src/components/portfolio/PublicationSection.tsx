import { ExternalLink, FileText, Calendar, Download } from "lucide-react";
import { motion } from "framer-motion";
import { PUBLICATIONS } from "./constants";

const PublicationSection = () => {
  return (
    <section id="publications" className=" py-24 text-white sm:py-32">
    
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Academic{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-slate-500 bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Contributing to the advancement of AI and smart systems through peer-reviewed research.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-5xl space-y-8">
          {PUBLICATIONS.map((pub, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-xl sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
            {/* Left Column: Metadata */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-cyan-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <p className="leading-relaxed">{pub.conference}</p>
                </div>
                <div className="mt-6">
                      <a
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-cyan-600 text-sm font-medium text-white transition-colors duration-300 hover:bg-cyan-700"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Read Paper</span>
                      </a>
                    </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-2 mt-6">
              <span className="mb-4 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-400">
                {pub.type}
              </span>
              <h3 className="mb-4 text-2xl font-bold leading-tight text-slate-100 sm:text-3xl">
                {pub.title}
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300">
                <p>{pub.description}</p>
              </div>
              <div className="mt-6 border-t border-zinc-800 pt-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300">
                      {keyword}
                    </span>
                  ))}
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