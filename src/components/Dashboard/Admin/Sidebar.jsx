import { useState } from "react";
import { Menu, ChevronLeft } from "lucide-react";

const Sidebar = ({ sidebarItems }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-white border-r transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-4">
        {!collapsed && (
          <div className="text-2xl font-bold text-blue-600">
             <img src={planixo} alt="Planixo Logo" className="h-9 w-auto" />
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Scrollable Navigation */}
      <nav
        className="flex flex-col gap-4 px-2 overflow-y-auto h-[calc(100vh-64px)]
        scrollbar-hide"
      >
        {sidebarItems.map((section, idx) => (
          <div key={idx}>
            {!collapsed && section.title && (
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2 px-2">
                {section.title}
              </p>
            )}

            <div className="flex flex-col gap-1">
              {section.items.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                      hover:bg-blue-50
                      ${item.danger ? "text-red-500" : "text-gray-700"}
                    `}
                  >
                    {Icon && <Icon size={18} />}

                    {!collapsed && (
                      <span className="text-sm font-medium">
                        {item.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
