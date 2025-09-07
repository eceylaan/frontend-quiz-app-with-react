import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  // Sayfa yenilenince localStorage'dan oku
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  // Tema değiştiğinde body ve localStorage güncelle
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="theme">
      <label>
        <img src="./img/light-theme.svg" alt="Light" />
      </label>
      <label className="switch">
        <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
      <label>
        <img src="./img/dark-theme.svg" alt="Dark" />
      </label>
    </div>
  );
}
