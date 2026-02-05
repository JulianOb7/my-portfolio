import { motion } from "framer-motion";

const projects = [
  {
    title: "notes",
    subtitle: "FULLSTACK",
    description:
      "Aplicación de gestión y organización de tareas y notas. Permite crear carpetas y notas personalizadas para organizarte de manera eficiente.",
    tech: ["React", "Java", "Spring Boot", "Spring Security", "MySQL"],
    image: "/organizer.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-32 pb-20">
      <h3 className="text-zinc-500 mb-12 uppercase tracking-widest text-sm">
        Selected Work
      </h3>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <span className="text-emerald-400 font-mono text-sm tracking-[0.2em] font-bold">
                {project.subtitle}
              </span>
              <h4 className="text-5xl font-bold mt-3 mb-6 text-white italic tracking-tighter">
                {project.title}
              </h4>
              <p className="text-zinc-400 text-xl mb-8 leading-relaxed max-w-xl">
                {project.description}
              </p>

              <div className="flex gap-4 mb-10">
                <button className="bg-zinc-800/80 hover:bg-zinc-700 px-6 py-3 rounded-xl text-sm font-medium transition flex items-center gap-2 border border-zinc-700">
                  GitHub Frontend
                </button>
                <button className="bg-zinc-800/80 hover:bg-zinc-700 px-6 py-3 rounded-xl text-sm font-medium transition flex items-center gap-2 border border-zinc-700">
                  GitHub Backend
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-zinc-900 text-zinc-400 px-4 py-1.5 rounded-full border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src={project.image}
                alt={project.title}
                className="relative rounded-2xl border border-zinc-800 shadow-2xl w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
