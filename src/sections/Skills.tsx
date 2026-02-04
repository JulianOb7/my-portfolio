import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Framer Motion",
  "Git",
];

export default function Skills() {
  return (
    <section className="mt-32">
      <h3 className="text-zinc-500 mb-8 uppercase tracking-widest text-sm">
        Tech Stack
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 text-sm cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
