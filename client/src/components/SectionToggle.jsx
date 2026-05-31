import React from "react";
export default function SectionToggle({ section, setSection }) {
  return (
    <div className="flex items-center justify-center mb-8 gap-4">
      <button
        className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm border-2 text-base focus:outline-none ${section === "placement" ? "bg-blue-600 text-white border-blue-600 scale-105" : "bg-white text-blue-600 border-blue-200 hover:bg-blue-50"}`}
        onClick={() => setSection("placement")}
      >
        Placement Importance
      </button>
      <button
        className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm border-2 text-base focus:outline-none ${section === "learning" ? "bg-blue-600 text-white border-blue-600 scale-105" : "bg-white text-blue-600 border-blue-200 hover:bg-blue-50"}`}
        onClick={() => setSection("learning")}
      >
        Learning Paths
      </button>
    </div>
  );
} 