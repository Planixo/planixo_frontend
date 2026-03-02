import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  ShieldCheck,
  BarChart3,
  FileText,
  Settings,
  LogOut
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <LayoutDashboard size={20} />
  },
  {
    name: "User Management",
    path: "/admin/users",
    icon: <Users size={20} />
  },
  {
    name: "Project Management",
    path: "/admin/projects",
    icon: <FolderKanban size={20} />
  },
  {
    name: "Role & Permissions",
    path: "/admin/roles",
    icon: <ShieldCheck size={20} />
  },
  {
    name: "Reports & Analytics",
    path: "/admin/reports",
    icon: <BarChart3 size={20} />
  },
  {
    name: "System Logs",
    path: "/admin/logs",
    icon: <FileText size={20} />
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: <Settings size={20} />
  }
];

const AdminSidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-slate-800">
          Planixo Admin
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          System Administrator Panel
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-sm font-medium
              ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-gray-100 hover:text-slate-900"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Bottom Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 w-full p-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>

    </div>
  );
};

export default AdminSidebar;