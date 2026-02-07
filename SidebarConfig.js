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

export const sidebarItems = [
  {
    title: "Dashboard",
    items: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        path: "/admin/dashboard",
      },
    ],
  },
  {
    title: "User Management",
    items: [
      { label: "All Users", icon: Users, path: "/admin/users" },
      { label: "User Verification", path: "/admin/users/verify" },
      { label: "Login History", path: "/admin/users/logins" },
    ],
  },
  {
    title: "Roles & Permissions",
    items: [
      { label: "Roles", icon: Shield, path: "/admin/roles" },
      { label: "RBAC Settings", path: "/admin/rbac" },
    ],
  },
  {
    title: "Projects",
    items: [
      { label: "All Projects", icon: FolderKanban, path: "/admin/projects" },
      { label: "Project Status", path: "/admin/projects/status" },
    ],
  },
  {
    title: "System Monitoring",
    items: [
      { label: "Analytics", icon: BarChart, path: "/admin/analytics" },
      { label: "Error Logs", path: "/admin/logs/errors" },
      { label: "Performance", path: "/admin/performance" },
    ],
  },
  {
    title: "Notifications",
    items: [{ label: "Alerts", icon: Bell, path: "/admin/alerts" }],
  },
  {
    title: "Security",
    items: [
      { label: "2FA & Access Logs", icon: Lock, path: "/admin/security" },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "System Settings", icon: Settings, path: "/admin/settings" },
    ],
  },
  {
    title: "Reports",
    items: [
      { label: "Audit Logs", icon: FileText, path: "/admin/audit-logs" },
      { label: "Export Reports", path: "/admin/reports" },
    ],
  },
  {
    title: "",
    items: [
      {
        label: "Logout",
        icon: LogOut,
        path: "/logout",
        danger: true,
      },
    ],
  },
];
