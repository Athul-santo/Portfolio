import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import ThemeMenu from "./ThemeMenu";
import { initialTheme, THEME_STORAGE_KEY } from "../theme";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(initialTheme);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Storage can be unavailable in private browsing.
    }
  }, [theme]);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-base-content/60 hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            );
          })}

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
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={`transition hover:text-primary ${
                    isActive ? "text-primary" : "text-base-content/75"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

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
