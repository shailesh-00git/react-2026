import { createContext, useState } from "react";

// create context theme
const ThemeContext = createContext();

//theme provideer component
export function ThemeProvider({ childern }) {
  //state to stor theme condition
  const [theme, setTheme] = useState("light");

  //theme toggle function
  const themeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //object
  const value = {
    theme,
    themeToggle,
    isDark: theme === "dark",
  };
  <ThemeContext.Provider value={value}>{childern}</ThemeContext.Provider>;
}

function ThemeToggler() {
  return <div>ThemeToggler</div>;
}

export default ThemeToggler;
