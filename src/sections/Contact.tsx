import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGmail } from "react-icons/si";
import { FaMicrosoft, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const emailLinks = {
    gmail:
      "https://mail.google.com/mail/?view=cm&fs=1&to=ginohable14@gmail.com",
    outlook:
      "https://outlook.office.com/mail/deeplink/compose?to=ginodeveloper1@hotmail.com",
  };

  return (
    <section
      id="contact"
      className="mt-32 pb-40 flex flex-col items-center text-center"
    >
      <span className="text-emerald-400 font-mono text-sm tracking-[0.3em] font-bold uppercase mb-4">
        Get in touch
      </span>

      <h3 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter">
        Let's build something <br /> together.
      </h3>

      <button
        onClick={() => setIsOpen(true)}
        className="px-12 py-5 bg-zinc-900 border border-zinc-800 text-emerald-400 font-bold text-xl rounded-2xl hover:bg-zinc-800 transition-all shadow-xl"
      >
        SAY HELLO!
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-2xl max-w-sm w-full"
            >
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-white text-xl font-bold">Send email via</h4>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-500 hover:text-white transition-colors text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={emailLinks.gmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-zinc-800/50 hover:bg-[#EA4335]/10 text-white p-4 rounded-xl border border-zinc-700 hover:border-[#EA4335]/50 transition-all group"
                >
                  <SiGmail className="group-hover:text-[#EA4335] text-2xl transition-colors" />
                  <span className="font-medium">Gmail (Browser)</span>
                </a>

                <a
                  href={emailLinks.outlook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-zinc-800/50 hover:bg-[#0078D4]/10 text-white p-4 rounded-xl border border-zinc-700 hover:border-[#0078D4]/50 transition-all group"
                >
                  <FaMicrosoft className="group-hover:text-[#0078D4] text-2xl transition-colors" />
                  <span className="font-medium">Outlook (Browser)</span>
                </a>

                <a
                  href="mailto:ginohable14@gmail.com"
                  className="flex items-center gap-4 bg-zinc-800/50 hover:bg-emerald-500/10 text-white p-4 rounded-xl border border-zinc-700 hover:border-emerald-500/50 transition-all group"
                >
                  <FaEnvelope className="group-hover:text-emerald-400 text-2xl transition-colors" />
                  <span className="font-medium">Default App</span>
                </a>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("ginohable14@gmail.com");
                  alert("Email copied to clipboard!");
                }}
                className="mt-8 w-full py-3 bg-zinc-950 text-zinc-400 hover:text-white text-xs font-mono tracking-wider transition-colors border border-zinc-800 rounded-lg"
              >
                COPY: ginohable14@gmail.com
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
