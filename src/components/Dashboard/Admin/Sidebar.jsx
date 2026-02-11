import { useState } from "react";
import { Menu, ChevronLeft } from "lucide-react";
<<<<<<< Updated upstream:src/components/Dashboard/Admin/Sidebar.jsx
<<<<<<< Updated upstream:src/components/Dashboard/Admin/Sidebar.jsx
import planixo from "../../../assets/planixo-logo.png";
=======
=======
>>>>>>> Stashed changes:src/components/Dashboard/Sidebar.jsx
import { useNavigate, useLocation } from "react-router-dom";
import planixo from "../../assets/planixo-logo.png";
>>>>>>> Stashed changes:src/components/Dashboard/Sidebar.jsx

const Sidebar = ({ sidebarItems }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
          <img
            src={planixo}
            alt="Planixo Logo"
            className="h-9 w-auto"
          />
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-blue-100 text-blue-600"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 px-2 h-[calc(100vh-64px)] overflow-y-auto">
        {sidebarItems.map((section, idx) => {
          const SectionIcon = section.icon;

          return (
            <div key={idx}>
              {/* Section Header */}
              <div
                className={`flex items-center px-3 py-2 rounded-lg
                  ${collapsed ? "justify-center" : "gap-2"}
                `}
              >
                {SectionIcon && (
                  <SectionIcon size={20} className="text-blue-600" />
                )}

                {!collapsed && section.title && (
                  <p className="text-[15px] font-semibold text-[#0F172A] uppercase">
                    {section.title}
                  </p>
                )}
              </div>

              {/* Items */}
              {!collapsed && (
                <div className="flex flex-col gap-1 ml-6 mt-1">
<<<<<<< Updated upstream:src/components/Dashboard/Admin/Sidebar.jsx
<<<<<<< Updated upstream:src/components/Dashboard/Admin/Sidebar.jsx
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className={`px-4 py-2 rounded-xl cursor-pointer
                        transition hover:bg-blue-100
                        ${item.danger ? "text-red-500" : "text-gray-700"}
                      `}
                    >
                      <span className="text-sm font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
=======
=======
>>>>>>> Stashed changes:src/components/Dashboard/Sidebar.jsx
                  {section?.items?.map((item, i) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <div
                        key={i}
                        onClick={() => navigate(item.path)}
                        className={`px-4 py-2 rounded-xl cursor-pointer
                          transition
                          ${
                            isActive
                              ? "bg-blue-600 text-white"
                              : "hover:bg-blue-100 text-gray-700"
                          }
                        `}
                      >
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
<<<<<<< Updated upstream:src/components/Dashboard/Admin/Sidebar.jsx
>>>>>>> Stashed changes:src/components/Dashboard/Sidebar.jsx
=======
>>>>>>> Stashed changes:src/components/Dashboard/Sidebar.jsx
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
