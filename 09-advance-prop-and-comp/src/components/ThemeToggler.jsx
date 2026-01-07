import { createContext, useContext, useState } from "react";

// 1 .create context theme
const ThemeContext = createContext();

//2 . theme provideer component
export function ThemeProvider({ children }) {
  //state to store theme condition
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

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

//custom hooks
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("UseTheme must be within theme provider");
  }
  return context;
}

export function ThemeToggleButton() {
  const { themeToggle, isDark } = useTheme();
  return (
    <button
      onClick={themeToggle}
      aria-pressed={isDark}
      aria-label="Toggle theme"
      className={`py-1 px-3 rounded-full transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isDark
          ? "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-amber-400"
      }`}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}

function ThemeToggler() {
  const { theme, isDark } = useTheme();
  return (
    <section
      className={`p-8 ${
        theme == "light" ? "bg-white" : "bg-gray-800"
      }  rounded-xl shadow-lg`}
    >
      <div className="flex justify-between gap-4">
        <h2
          className={`text-3xl font-bold mb-4 ${
            theme == "light" ? "text-gray-800" : "text-white"
          } `}
        >
          Theme props
        </h2>
        <div className="">
          <span className={`mx-2 ${isDark && "text-white"}`}>{theme} mode</span>
          <ThemeToggleButton />
        </div>
      </div>

      <p
        className={` mb-6 ${
          theme == "light" ? "text-gray-800" : "text-white"
        } `}
      >
        Theme props allows you to change the theme of the page .It can toggle
        from dark to light light to dark
      </p>

      <div className="grid grid-cols-2 gap-10">
        {" "}
        <div
          className={`shadow-lg  px-6 py-6 rounded-lg ${
            theme == "light"
              ? "bg-white text-gray-900"
              : "bg-gray-700 text-white"
          }`}
        >
          <h3 className="text-xl font-semibold mb-3">User Information</h3>
          <p>Name: Shailesh</p>
          <p>Email: shailesh@gmail.com</p>
          <p>Role: Developer</p>
          <div className="mt-4 flex gap-4">
            <button
              aria-label="Edit profile"
              className={`px-4 py-2 rounded-lg ${
                isDark
                  ? "bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  : "bg-amber-500 text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              }`}
            >
              Edit profile
            </button>
            <button
              aria-label="Settings"
              className={`px-4 py-2 rounded-lg ${
                theme == "light"
                  ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
                  : "bg-gray-600 text-white hover:bg-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-gray-400`}
            >
              Settings
            </button>
          </div>
        </div>
        <div
          className={`shadow-lg px-6 py-6 rounded-lg ${
            theme == "light"
              ? "bg-white text-gray-900"
              : "bg-gray-700 text-white"
          }`}
        >
          <h3 className="text-xl font-semibold mb-3">Stastics</h3>
          <div className="flex justify-between mb-1 ">
            <span>Total clicks:</span>
            <span className={` ${isDark && "text-blue-500"} font-semibold`}>
              0
            </span>
          </div>
          <div className="flex justify-between mb-1 ">
            <span>Theme:</span>
            <span className={` ${isDark && "text-white"} font-semibold`}>
              {theme}
            </span>
          </div>
          <div className="flex justify-between mb-1 ">
            <span>Status:</span>
            <span className={` ${isDark && "text-green-500"} font-semibold`}>
              Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThemeToggler;
