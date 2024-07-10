import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

export default function Navbar({ onThemeChange, onFontChange }) {
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("sans");

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  const handleFontChange = (e) => {
    const newFont = e.target.value;
    setFont(newFont);
    onFontChange(newFont);
  };

  return (
    <div className={` flex justify-between items-center p-4 navbar ${theme === "light" ? "bg-gray-100" : "bg-gray-800"} text-${theme === "light" ? "black" : "white"}`}>
      <h1 className="text-2xl font-bold">Dictionary App</h1>
      <div className="flex items-center">
        <select
          onChange={handleFontChange}
          value={font}
          className={`p-2 rounded ${theme === "light" ? "bg-gray-100" : "bg-gray-800"} text-${theme === "light" ? "gray-800" : "white"}`}
        >
          <option value="sans">Sans</option>
          <option value="serif">Serif</option>
          <option value="mono">Monospace</option>
        </select>
        <button
          onClick={handleThemeChange}
          className={`p-2 rounded mr-4 ${theme === "light" ? "bg-gray-100" : "bg-gray-800"} text-${theme === "light" ? "gray-800" : "white"}`}
        >
          {theme === "light" ? <FaRegMoon /> : <FaRegSun />}
        </button>
      </div>
    </div>
  );
}
