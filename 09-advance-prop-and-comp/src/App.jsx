import BasicProps from "./components/BasicProps.jsx";
import ChildernProps from "./components/ChildernProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ThemeToggler from "./components/ThemeToggler.jsx";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "®️" },
    { id: "childern", label: "Childern Props", icon: "👦" },
    { id: "complex", label: "Complex Props", icon: "😥" },
    { id: "theme", label: "Theme Props", icon: "🌑" },
  ];
  return (
    <nav className="sticky z-50 top-0 shadow-md">
      <div className="flex justify-center items-center h-20 ">
        <div>
          {sections.map((section) => (
            <button
              className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mr-2 mt-2 hover:bg-blue-800 tarnsition-all duration-250`}
              key={section.id}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation />
      <div className={`container mx-auto px-4 py-8`}>
        <header>
          <h1 className="text-center text-white text-5xl font-bold mb-6">
            React Props Explained
          </h1>
          <p className="text-center text-lg  text-white mb-2">
            A complete quide to understand and leran the react props
          </p>
          <p className="text-center text-white">
            Build with: bun + react + vite + tailwindcss
          </p>
        </header>

        <div className="space-y-8">
          <div id="baisc" className="scroll-mt-200">
            <BasicProps />
          </div>
        </div>
      </div>
    </div>
  );
}
function App() {
  return <AppContent />;
}
export default App;
