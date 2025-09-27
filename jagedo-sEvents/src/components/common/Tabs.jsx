import { useState } from "react";

export default function Tabs({ tabs, activeTab, setActiveTab }) {
//   const [activeTab, setActiveTab] = useState(initialTab || tabs[0].key);

    const currentTab = activeTab || tabs[0].key;


  return (
    <div className="w-full top-32 relative">
      {/* Tab headers */}
      <ul className="flex gap-6 shadow-sm border-t border-gray-200 justify-center py-8">
        {tabs.map((tab) => (
          <li
            key={tab.key}
            className={`cursor-pointer text-normal font-medium ${
              activeTab === tab.key
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-900 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      {/* Tab content */}
      <div className="mt-6">
        {tabs.find((tab) => tab.key === currentTab)?.content}
      </div>
    </div>
  );
}
