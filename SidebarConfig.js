import {
  LayoutDashboard,
  Users,
  Shield,
  FolderKanban,
  BarChart,
  Bell,
  Lock,
  Settings,
  FileText,
  LogOut,
} from "lucide-react";

export const sidebarItems = {
  admin: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      title: "User Management",
      icon: Users,
      items: [
        { label: "All Users", path: "/admin/users" },
        { label: "User Verification", path: "/admin/users/verify" },
        { label: "Login History", path: "/admin/users/logins" },
      ],
    },
    {
      title: "Roles & Permissions",
      icon: Shield,
      items: [
        { label: "Roles", path: "/admin/roles" },
       
        { label: "RBAC Settings", path: "/admin/rbac" },
      ],
    },
    {
      title: "Projects",
      icon: FolderKanban,

      items: [
        { label: "All Projects", path: "/admin/projects" },
       ,
        { label: "Project Status", path: "/admin/projects/status" },
      ],
    },
    {
      title: "System Monitoring",
      icon: BarChart,
      items: [
        { label: "Analytics", path: "/admin/analytics" },
       
        { label: "Error Logs", path: "/admin/logs/errors" },
        { label: "Performance", path: "/admin/performance" },
      ],
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [{ label: "Alerts", path: "/admin/alerts" }],
    },
    {
      title: "Security",
      icon: Lock,
      path: "/admin/security",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
    {
      title: "Reports",
      icon: FileText,

      items: [
        { label: "Audit Logs", path: "/admin/audit-logs" },
        { label: "Export Reports", path: "/admin/reports" },
      ],
    },
    {
      title: "Logout",
      icon: LogOut,
      path: "/logout",
      danger: true,
    },
  ],
};
