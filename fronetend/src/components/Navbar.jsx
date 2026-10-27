import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import ThemeMenu from "./ThemeMenu";
import { initialTheme, THEME_STORAGE_KEY } from "../theme";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Storage can be unavailable in private browsing.
    }
  }, [theme]);

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

          {/* Theme menu sits after Contact */}
          <ThemeMenu theme={theme} onSelect={setTheme} />
        </div>

        {/* Profile */}
        <ProfileMenu />
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-base-content/10 bg-base-100 px-6 py-5 md:hidden">
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

            <ThemeMenu
              variant="mobile"
              theme={theme}
              onSelect={setTheme}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
