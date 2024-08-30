import React from "react";
import { ShopContext } from "../context/ShopContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = React.useContext(ShopContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-[0.45em] text-sm bg-gray-200 dark:bg-gray-800 rounded text-black dark:text-white"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggleButton;