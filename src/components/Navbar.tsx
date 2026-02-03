export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 maz-w-5xl mz-auto">
      <h2 className="text-xl font-bold italic">JS.</h2>
      <div className="flex gap-6 text-zinc-400">
        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>
        <a href="#about" className="hover:text-white transition">
          About
        </a>
        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
