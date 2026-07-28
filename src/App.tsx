import { Sun, Moon } from "lucide-react";
import { useState } from "react";
function App() {
  const [isDark, setIsDark] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const handleDark = () => {
    setIsDark((prev) => !prev);
  };

  const data = [
    { name: "Total", total: 0 },
    { name: "Active", total: 0 },
    { name: "Completed", total: 0 },
    { name: "Progress", total: "0%" },
  ];
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
        <div className="grid grid-cols-2 gap-2 mt-6">
          {data.map((item, idx) => (
            <div
              key={idx}
              className={`w-full h-12 p-1 rounded-xl shadow-md ${isDark ? "bg-[#0d0d0d]" : "bg-[#fcfcfc]"}`}
            >
              <p className="font-bold text-xs">{item.name}</p>
              <p className=" text-xs">{item.total}</p>
            </div>
          ))}
        </div>
        {/* task */}
      </div>
    </div>
  );
}

export default App;
