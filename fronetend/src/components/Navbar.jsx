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
      <div className="flex items-center justify-between px-6 py-4">
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

        {/* Profile */}
        <a href="#home" className="flex items-center">
          <img
            src={profileImage}
            alt="Athul Santo"
            className="h-11 w-11 rounded-full border-2 border-cyan-400 object-cover object-top"
          />
        </a>
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
          </div>
        </div>
      )}
    </nav>
  );
}