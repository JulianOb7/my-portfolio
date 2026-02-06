import { motion } from "framer-motion";
import {
  SiReact,
  SiSpringboot,
  SiSpringsecurity,
  SiMysql,
  SiDocker,
  SiOpenjdk,
} from "react-icons/si";

const projects = [
  {
    title: "Note Creator",
    subtitle: "FULLSTACK",
    description:
      "A comprehensive task and note management application designed for optimal productivity. It features a robust system for creating custom folders and personalized notes with a focus on seamless user experience.",
    tech: [
      { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
      { name: "Java", icon: <SiOpenjdk />, color: "text-[#ED8B00]" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "text-[#6DB33F]" },
      {
        name: "Spring Security",
        icon: <SiSpringsecurity />,
        color: "text-[#6DB33F]",
      },
      { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]" },
      { name: "Docker", icon: <SiDocker />, color: "text-[#2496ED]" },
    ],
    image: "/organizer.png",
    github: "https://github.com/tu-usuario/tu-repo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-32 pb-20">
      <h3 className="text-white mb-12 uppercase tracking-[0.3em] text-2xl font-bold">
        Projects
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:bg-zinc-200 px-8 py-3 rounded-full text-sm font-bold transition flex items-center gap-2"
                >
                  View Project on GitHub
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-medium bg-zinc-900 text-zinc-400 px-3 py-1.5 rounded-full border border-zinc-800 hover:border-emerald-500/50 transition-colors"
                  >
                    <span className={`text-lg ${t.color}`}>{t.icon}</span>
                    <span>{t.name}</span>
                  </div>
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
