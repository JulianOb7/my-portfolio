import { motion } from "framer-motion";

const projects = [
  { title: "E-commerce App", tech: "React + Tailwind", link: "#" },
  { title: "Social Dashboard", tech: "TypeScript + Vite", link: "#" },
  { title: "Portfolio V4", tech: "Framer Motion", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-32 pb-20">
      <h3 className="text-zinc-500 mb-8 uppercase tracking-widest text-sm">
        Selected Work
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-800/50 transition-colors cursor-pointer"
          >
            <span className="text-xs text-zinc-500 font-mono">
              {project.tech}
            </span>
            <h4 className="text-2xl font-semibold mt-2 group-hover:translate-x-2 transition-transform italic">
              {project.title} →
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
