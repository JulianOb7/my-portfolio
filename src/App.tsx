import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 mt-20">
        <section className="flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold tracking-tighter"
          >
            Software Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-md"
          >
            Building digital products, brands, and experience.
          </motion.p>
        </section>
      </main>
    </div>
  );
}
