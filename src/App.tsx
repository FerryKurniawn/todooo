import { Sun, Moon } from "lucide-react";
import { useState } from "react";
function App() {
  const [isDark, setIsDark] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const handleDark = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <div
      className={`min-h-screen ${isDark ? "text-white bg-black" : "text-black bg-white"}`}
    >
      <div className="mx-4">
        <div className="flex items-center justify-between">
          {/* header */}
          <div>
            <h1 className="font-bold text-lg">Tasky</h1>
            <p className="font-extralight text-sm">
              Good evening, ready to focus?
            </p>
          </div>
          <div>
            <button className="text-xs" onClick={handleDark}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
        {/* dashboard */}
        <div></div>
      </div>
    </div>
  );
}

export default App;
