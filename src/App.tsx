import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import { motion } from "framer-motion";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 font-sans">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 mt-32">
        <section className="flex flex-col gap-4 items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold tracking-tighter text-white"
          >
            Gino Sanchez
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl text-zinc-400 font-medium tracking-tight"
          >
            Software Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-4xl mt-4 leading-relaxed"
          >
            Systems Engineer specializing as a Fullstack Developer with over 3
            years of experience crafting robust and scalable digital solutions.
          </motion.p>
        </section>

        {/* Nuevo orden solicitado */}
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
