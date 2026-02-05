import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import { motion } from "framer-motion";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 font-sans">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 mt-32">
        <section className="flex flex-col gap-4 items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold tracking-tighter text-white"
          >
            Gino Sanchez
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl text-zinc-400 font-medium tracking-tight"
          >
            Software Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-md mt-4"
          >
            Building digital products, brands, and experience.
          </motion.p>
        </section>

        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
