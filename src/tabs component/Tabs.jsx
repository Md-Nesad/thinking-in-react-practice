import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const togglerTabs = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => togglerTabs(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded-b-lg bg-white shadow-md">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
