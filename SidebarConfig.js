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
  // ClipboardList,
  // CheckCircle,
  // Clock,
  // User,
  // BarChart3,
  // Calendar,
  // Settings,
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

  // employee: [
  //   {
  //     title: "Employee",
  //     icon: User,
  //     items: [
  //       {
  //         label: "Dashboard",
  //         icon: LayoutDashboard,
  //         path: "/employee/dashboard",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Tasks",
  //     icon: ClipboardList,
  //     items: [
  //       {
  //         label: "My Tasks",
  //         icon: ClipboardList,
  //         path: "/employee/tasks",
  //       },
  //       {
  //         label: "In Progress",
  //         icon: Clock,
  //         path: "/employee/tasks/in-progress",
  //       },
  //       {
  //         label: "Completed Tasks",
  //         icon: CheckCircle,
  //         path: "/employee/tasks/completed",
  //       },
  //     ],
  //   },
  // ],

  // projectmanager: [
  //   {
  //     title: "Project Manager",
  //     icon: LayoutDashboard,
  //     items: [
  //       {
  //         label: "Dashboard",
  //         path: "/pm/dashboard",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Project Execution",
  //     icon: ClipboardList,
  //     items: [
  //       {
  //         label: "All Projects",
  //         path: "/pm/projects",
  //       },
  //       {
  //         label: "Create Project",
  //         path: "/pm/projects/create",
  //       },
  //       {
  //         label: "Milestones",
  //         path: "/pm/milestones",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Task Management",
  //     icon: CheckCircle,
  //     items: [
  //       {
  //         label: "Assign Tasks",
  //         path: "/pm/tasks/assign",
  //       },
  //       {
  //         label: "Task Board",
  //         path: "/pm/tasks",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Team",
  //     icon: Users,
  //     items: [
  //       {
  //         label: "Team Members",
  //         path: "/pm/team",
  //       },
  //       {
  //         label: "Workload",
  //         path: "/pm/workload",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Tracking & Reports",
  //     icon: BarChart3,
  //     items: [
  //       {
  //         label: "Progress Tracking",
  //         path: "/pm/progress",
  //       },
  //       {
  //         label: "Reports",
  //         path: "/pm/reports",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Schedule",
  //     icon: Calendar,
  //     items: [
  //       {
  //         label: "Timeline",
  //         path: "/pm/timeline",
  //       },
  //       {
  //         label: "Meetings",
  //         path: "/pm/meetings",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Notifications",
  //     icon: Bell,
  //     items: [
  //       {
  //         label: "Alerts",
  //         path: "/pm/alerts",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Settings",
  //     icon: Settings,
  //     items: [
  //       {
  //         label: "Profile Settings",
  //         path: "/pm/settings",
  //       },
  //     ],
  //   },
  // ],
};
