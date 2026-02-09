import { useState } from "react";
import { Menu, ChevronLeft } from "lucide-react";
import planixo from "../../../assets/planixo-logo.png";

const Sidebar = ({ sidebarItems }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
        bg-gradient-to-b from-white to-blue-50
        border-r border-blue-100
      `}
    >
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-4">
        {!collapsed && (
<<<<<<< Updated upstream
          <img
            src={planixo}
            alt="Planixo Logo"
            className="h-9 w-auto"
          />
=======
          <img src={planixo} alt="Planixo Logo" className="h-9 w-auto" />
>>>>>>> Stashed changes
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-blue-100 text-blue-600"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
<<<<<<< Updated upstream
      <nav className="flex flex-col gap-3 px-2 h-[calc(100vh-64px)] overflow-y-auto">
=======
      <nav className="flex flex-col gap-4 px-2 h-[calc(100vh-64px)] overflow-y-auto">
>>>>>>> Stashed changes
        {sidebarItems.map((section, idx) => {
          const SectionIcon = section.icon;

          return (
            <div key={idx}>
              {/* Section Header */}
              <div
<<<<<<< Updated upstream
                className={`flex items-center px-3 py-2 rounded-lg
                  ${collapsed ? "justify-center" : "gap-2"}
                `}
              >
                {SectionIcon && (
                  <SectionIcon
                    size={20}
                    className="text-blue-600"
                  />
                )}

                {!collapsed && (
=======
                className={`flex items-center gap-2 px-3 py-2 rounded-lg
            ${collapsed ? "justify-center" : ""}
          `}
              >
                {SectionIcon && (
                  <SectionIcon size={20} className="text-blue-600" />
                )}

                {!collapsed && section.title && (
>>>>>>> Stashed changes
                  <p className="text-[15px] font-semibold text-[#0F172A] uppercase">
                    {section.title}
                  </p>
                )}
              </div>

<<<<<<< Updated upstream
              {/* Items (only when expanded) */}
              {!collapsed && (
                <div className="flex flex-col gap-1 ml-6 mt-1">
=======
              {/* Items — ONLY when expanded */}
              {!collapsed && (
                <div className="flex flex-col gap-1 mt-1">
>>>>>>> Stashed changes
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className={`px-4 py-2 rounded-xl cursor-pointer
<<<<<<< Updated upstream
                        transition hover:bg-blue-100
                        ${item.danger ? "text-red-500" : "text-gray-700"}
                      `}
                    >
                      <span className="text-sm font-medium">
                        {item.label}
                      </span>
=======
                  transition hover:bg-blue-100
                  ${item.danger ? "text-red-500" : "text-gray-700"}
                `}
                    >
                      <span className="text-sm font-medium">{item.label}</span>
>>>>>>> Stashed changes
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
