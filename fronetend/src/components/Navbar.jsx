import { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import ThemeMenu from "./ThemeMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-base-content/10 bg-base-100/95 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="text-2xl text-base-content md:hidden"
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
                  ? "text-primary"
                  : "text-base-content/60 hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme control + profile */}
        <div className="flex items-center gap-2">
          <ThemeMenu />
          <ProfileMenu />
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-base-content/10 bg-base-100 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base-content/75 transition hover:text-primary"
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
