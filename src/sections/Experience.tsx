import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="mt-32">
      <h3 className="text-zinc-500 mb-12 uppercase tracking-widest text-sm text-center lg:text-left">
        Professional Experience
      </h3>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="border-l border-zinc-800 pl-8 ml-4 lg:ml-0"
      >
        <div className="relative">
          <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-2">
            <div>
              <h4 className="text-2xl font-bold text-white">Java Developer</h4>
              <p className="text-emerald-400 font-medium text-lg">
                Applaudo (Remote)
              </p>
            </div>
            <span className="text-zinc-500 font-mono text-sm bg-zinc-900/50 px-3 py-1 rounded-md border border-zinc-800">
              Nov 2022 – Dec 2024
            </span>
          </div>

          <ul className="space-y-4 text-zinc-400 max-w-3xl">
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1.5 text-xs">●</span>
              <p>
                Designed and implemented scalable back-end services using Java
                and Spring Boot, improving system modularity and maintenance.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1.5 text-xs">●</span>
              <p>
                Optimized database queries and schemas using SQL, ensuring high
                performance and data integrity for enterprise-level
                applications.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1.5 text-xs">●</span>
              <p>
                Streamlined development workflows by containerizing applications
                with Docker, reducing environment-related inconsistencies by
                30%.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1.5 text-xs">●</span>
              <p>
                Collaborated in agile teams using Git, ensuring smooth CI/CD
                integration and high-quality code reviews.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1.5 text-xs">●</span>
              <p>
                Developed interactive user interfaces using React and
                TypeScript, bridging the gap between back-end logic and user
                experience.
              </p>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
