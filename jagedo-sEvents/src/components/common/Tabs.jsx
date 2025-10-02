import { useState } from "react";
import { Menu } from "lucide-react";

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentTab = activeTab || tabs[0].key;

  const handleSelectTab = (key) => {
    setActiveTab(key);
    setMenuOpen(false);
  };

  return (
    <div className="w-full">
      <div className="fixed top-24 w-full z-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex justify-end">
          <div className="relative inline-block">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl p-2 bg-white border border-gray-300 rounded shadow focus:outline-none"
              aria-label="Toggle menu">
              <Menu className="w-6 h-6" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-md min-w-[10rem] w-full max-w-[16rem]">
                <ul className="flex flex-col">
                  {tabs.map((tab) => (
                    <li
                      key={tab.key}
                      className={`px-6 py-3 cursor-pointer hover:bg-blue-100 ${
                        activeTab === tab.key ? "text-blue-600 font-semibold" : "text-gray-800"
                      }`}
                      onClick={() => handleSelectTab(tab.key)}>
                      {tab.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-[88px]">{tabs.find((tab) => tab.key === currentTab)?.content}</div>
    </div>
  );
}
