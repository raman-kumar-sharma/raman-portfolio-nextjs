"use client";
import { useState, useEffect } from "react";

const THEMES = [
  { key: "theme-neon",   label: "🔮 Neon Future",  border: "#0ff",     color: "#0ff" },
  { key: "theme-zen",    label: "🌿 Zen Nature",    border: "#bc6c25",  color: "#bc6c25" },
  { key: "theme-jungle", label: "🌲 Forest",        border: "#2e7d32",  color: "#2e7d32" },
  { key: "theme-future", label: "🚀 Future Prime",  border: "#38bdf8",  color: "#38bdf8" },
];

interface Props {
  currentTheme: string;
  onThemeChange: (t: string) => void;
}

export default function Header({ onThemeChange }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section, footer").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleTheme = (key: string) => {
    onThemeChange(key);
    setMenuOpen(false);
    localStorage.setItem("portfolio-theme", key);
  };

  return (
    <header>
      <div className="logo">
        Raman<span style={{ color: "var(--accent)" }}>Sharma</span>
        <span className="status-indicator" title="Available for Developer Roles" />
      </div>

      <nav>
        <ul className={`nav-list${navOpen ? " active" : ""}`}>
          {["about","timeline","experience","projects","terminal-section","contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={() => setNavOpen(false)}
              >
                {id === "about" ? "About" : id === "terminal-section" ? "Terminal" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-controls">
        <button className="theme-toggle-btn" onClick={() => setMenuOpen((p) => !p)}>🎨 Theme</button>
        <div className={`theme-switcher${menuOpen ? " active" : ""}`}>
          {THEMES.map((t) => (
            <button
              key={t.key}
              className="theme-opt"
              style={{ border: `1px solid ${t.border}`, color: t.color }}
              onClick={() => handleTheme(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="hamburger" id="hamburgerBtn" onClick={() => setNavOpen((p) => !p)}>
          <i className="fas fa-bars" />
        </div>
      </div>
    </header>
  );
}
