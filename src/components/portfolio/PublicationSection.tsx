import { ExternalLink, FileText, Calendar, Download } from "lucide-react";
import { motion } from "framer-motion";

const publication = {
  title: "Hybrid Approach for Enhancing Traffic Signal Control with Computer Vision and Reinforcement Learning",
  conference: "2023 14th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
  year: "2023",
  type: "Conference Paper",
  description: "This research presents a novel hybrid approach combining Computer Vision and Reinforcement Learning techniques to optimize traffic signal control systems, improving traffic flow efficiency at intersections.",
  keywords: ["Computer Vision", "Reinforcement Learning", "Traffic Control", "Smart Cities"],
  paperUrl: "https://ieeexplore.ieee.org/document/10307312", // Add the actual link to the paper

};

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
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Contributing to the advancement of AI and smart systems through peer-reviewed research.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-5xl rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-xl sm:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column: Metadata */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-violet-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-200">Details</h4>
                </div>
                <div className="space-y-3 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-violet-400" />
                    <span>Published in {publication.year}</span>
                  </div>
                  <p className="leading-relaxed">{publication.conference}</p>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={publication.paperUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-violet-600 text-white transition-colors duration-300 hover:bg-violet-700">
                    <div className="flex h-10 w-full items-center justify-center gap-2 text-sm font-medium">
                      <ExternalLink className="h-4 w-4" />
                      <span>Read Paper</span>
                    </div>
                  </a>
                
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-2">
              <span className="mb-4 inline-block rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-400">
                {publication.type}
              </span>
              <h3 className="mb-4 text-2xl font-bold leading-tight text-slate-100 sm:text-3xl">
                {publication.title}
              </h3>
              <div className="prose prose-invert max-w-none text-slate-300">
                <p>{publication.description}</p>
              </div>
              <div className="mt-6 border-t border-zinc-800 pt-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {publication.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationSection;