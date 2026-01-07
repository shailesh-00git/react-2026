import BasicProps from "./components/BasicProps.jsx";
import ChildernProps from "./components/ChildernProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ThemeToggler from "./components/ThemeToggler.jsx";
import { ThemeProvider } from "./components/ThemeToggler.jsx";

function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "childern", label: "Childern Props", icon: "👦" },
    { id: "complex", label: "Complex Props", icon: "😥" },
    { id: "ref", label: "Ref Props", icon: "®️" },
    { id: "theme", label: "Theme Props", icon: "🌑" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 shadow-md">
      <div className="flex justify-center items-center h-20">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mr-2 hover:bg-blue-800 transition-all"
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation />
      <main className={`container mx-auto px-4 py-8`}>
        <header>
          <h1 className="text-center text-white text-5xl font-bold mb-6">
            React Props Explained
          </h1>
          <p className="text-center text-lg  text-white mb-2">
            A complete quide to understand and leran the react props
          </p>
          <p className="text-center text-white mb-5">
            Build with: bun + react + vite + tailwindcss
          </p>
        </header>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="childern" className="scroll-mt-24">
            <ChildernProps />
          </div>
          <div id="complex" className="scroll-mt-24">
            <ComplexProps />
          </div>
          <div id="ref" className="scroll-mt-24">
            <RefProps />
          </div>
          <div id="theme" className="scroll-mt-24">
            <ThemeToggler />
          </div>
        </div>

        {/* footer */}
        <div className={` grid place-content-center text-white`}>
          <p>Made with react, bun and love❤️</p>
        </div>
      </main>
    </div>
  );
}
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
export default App;
