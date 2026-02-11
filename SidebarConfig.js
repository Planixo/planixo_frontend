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
<<<<<<< Updated upstream
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    icon: LayoutDashboard,
    items: [
      { label: "Dashboard", path: "/admin/dashboard" },
      { label: "Dashboard", path: "/admin/dashboard" },
    ],
  },
  {
    title: "User Management",
    icon: Users,
    icon: Users,
    items: [
      { label: "All Users", path: "/admin/users" },
      { label: "All Users", path: "/admin/users" },
      { label: "User Verification", path: "/admin/users/verify" },
      { label: "Login History", path: "/admin/users/logins" },
    ],
  },
  {
    title: "Roles & Permissions",
    icon: Shield,
    icon: Shield,
    items: [
      { label: "Roles", path: "/admin/roles" },
      { label: "Roles", path: "/admin/roles" },
      { label: "RBAC Settings", path: "/admin/rbac" },
    ],
  },
  {
    title: "Projects",
    icon: FolderKanban,
    icon: FolderKanban,
    items: [
      { label: "All Projects", path: "/admin/projects" },
      { label: "All Projects", path: "/admin/projects" },
      { label: "Project Status", path: "/admin/projects/status" },
    ],
  },
  {
    title: "System Monitoring",
    icon: BarChart,
    icon: BarChart,
    items: [
      { label: "Analytics", path: "/admin/analytics" },
      { label: "Analytics", path: "/admin/analytics" },
      { label: "Error Logs", path: "/admin/logs/errors" },
      { label: "Performance", path: "/admin/performance" },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    items: [
      { label: "Alerts", path: "/admin/alerts" },
    ],
    icon: Bell,
    items: [
      { label: "Alerts", path: "/admin/alerts" },
    ],
  },
  {
    title: "Security",
    icon: Lock,
    icon: Lock,
    items: [
      { label: "2FA & Access Logs", path: "/admin/security" },
      { label: "2FA & Access Logs", path: "/admin/security" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    icon: Settings,
    items: [
      { label: "System Settings", path: "/admin/settings" },
      { label: "System Settings", path: "/admin/settings" },
    ],
  },
  {
    title: "Reports",
    icon: FileText,
    icon: FileText,
    items: [
      { label: "Audit Logs", path: "/admin/audit-logs" },
      { label: "Audit Logs", path: "/admin/audit-logs" },
      { label: "Export Reports", path: "/admin/reports" },
    ],
  },
  {
    title: "Logout",
    icon: LogOut,
    items: [
      {
        label: "Logout",
        path: "/logout",
        danger: true,
      },
    ],
  },
];
=======
  ClipboardList,
  CheckCircle,
  Clock,
  User,
  BarChart3,
  Calendar,
} from "lucide-react";

export const sidebarItems = {
  admin: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard/admin",
    },
    {
      title: "User Management",
      icon: Users,
      items: [
        { label: "All Users", path: "/dashboard/users" }, // ✅ FIXED
        { label: "All Teams", path: "/admin/users/teams" },
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

  employee: [
    {
      title: "Employee",
      icon: User,
      items: [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          path: "/dashboard/employee",
        },
      ],
    },
    {
      title: "Tasks",
      icon: ClipboardList,
      items: [
        {
          label: "My Tasks",
          icon: ClipboardList,
          path: "/employee/tasks",
        },
        {
          label: "In Progress",
          icon: Clock,
          path: "/employee/tasks/in-progress",
        },
        {
          label: "Completed Tasks",
          icon: CheckCircle,
          path: "/employee/tasks/completed",
        },
      ],
    },
  ],

  projectmanager: [
    {
      title: "Project Manager",
      icon: LayoutDashboard,
      items: [
        {
          label: "Dashboard",
          path: "/dashboard/projectmanager",
        },
      ],
    },
    {
      title: "Project Execution",
      icon: ClipboardList,
      items: [
        {
          label: "All Projects",
          path: "/pm/projects",
        },
        {
          label: "Create Project",
          path: "/pm/projects/create",
        },
        {
          label: "Milestones",
          path: "/pm/milestones",
        },
      ],
    },
    {
      title: "Task Management",
      icon: CheckCircle,
      items: [
        {
          label: "Assign Tasks",
          path: "/pm/tasks/assign",
        },
        {
          label: "Task Board",
          path: "/pm/tasks",
        },
      ],
    },
    {
      title: "Team",
      icon: Users,
      items: [
        {
          label: "Team Members",
          path: "/pm/team",
        },
        {
          label: "Workload",
          path: "/pm/workload",
        },
      ],
    },
    {
      title: "Tracking & Reports",
      icon: BarChart3,
      items: [
        {
          label: "Progress Tracking",
          path: "/pm/progress",
        },
        {
          label: "Reports",
          path: "/pm/reports",
        },
      ],
    },
    {
      title: "Schedule",
      icon: Calendar,
      items: [
        {
          label: "Timeline",
          path: "/pm/timeline",
        },
        {
          label: "Meetings",
          path: "/pm/meetings",
        },
      ],
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        {
          label: "Alerts",
          path: "/pm/alerts",
        },
      ],
    },
    {
      title: "Settings",
      icon: Settings,
      items: [
        {
          label: "Profile Settings",
          path: "/pm/settings",
        },
      ],
    },
  ],
};
>>>>>>> Stashed changes
