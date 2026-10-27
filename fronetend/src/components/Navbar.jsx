import { useState } from "react";
import profileImage from "../assets/profile.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-[#020617]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo, Profile and Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo and Profile */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={profileImage}
              alt="Athul Santo"
              className="h-11 w-11 rounded-full border-2 border-cyan-400 object-cover object-top"
            />

            <span className="text-xl font-bold text-white">
              Athul<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 ${
                  link.name === "Home"
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 md:inline-flex"
        >
          Let's Talk ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="text-2xl text-white md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-[#020617] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
            >
              Let's Talk ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}