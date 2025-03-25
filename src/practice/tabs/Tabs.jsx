import { button } from "framer-motion/client";
import React, { useState } from "react";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <h1>Tabs</h1>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className="bg-green-300 p-5 cursor-pointer"
        >
          {tab.title}
        </button>
      ))}
      <div className="bg-red-300 w-48 h-auto">
        {tabs[activeTab].description}
      </div>
    </div>
  );
}
