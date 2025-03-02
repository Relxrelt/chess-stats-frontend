import { useState } from "react";
import { setTheme } from "../themes";
import { useEffect } from "react";

export default function Toggle() {
  const [themeType, setThemeType] = useState("light-theme");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setThemeType(savedTheme);
  }, []);

  const handleOnClick = () => {
    const newTheme = themeType === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    setThemeType(newTheme);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={handleOnClick}
        checked={themeType === "dark-theme"}
      />
      <span className="slider round"></span>
    </label>
  );
}
