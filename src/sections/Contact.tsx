import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="mt-32 pb-40 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-zinc-500 uppercase tracking-widest text-sm mb-4">
          Get in touch
        </h3>
        <h2 className="text-5xl font-bold mb-8 tracking-tighter">
          Let's work together.
        </h2>
        <a
          href="mailto:tuemail@ejemplo.com"
          className="text-2xl italic hover:text-zinc-400 transition-colors border-b border-white"
        >
          ginohable14@gmail.com
        </a>

        <div className="flex justify-center gap-8 mt-12 text-zinc-500">
          <a href="#" className="hover:text-white transition">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition">
            Twitter
          </a>
        </div>
      </motion.div>
    </section>
  );
}
