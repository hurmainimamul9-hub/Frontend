"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? "dark";
    setTheme(stored);
    document.documentElement.setAttribute("data-theme", stored);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Ganti ke tema ${theme === "dark" ? "terang" : "gelap"}`}
      title="Ganti tema"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
