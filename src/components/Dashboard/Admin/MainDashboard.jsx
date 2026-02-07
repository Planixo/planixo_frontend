import {
  Users,
  FolderKanban,
  ShieldCheck,
  Activity,
  Server,
  Bell,
} from "lucide-react";

const MainDashboard = () => {
  return (
    <div className="h-full overflow-y-auto scrollbar-hide space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          System overview and quick insights
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="1,245"
          icon={Users}
        />
        <StatCard
          title="Active Projects"
          value="38"
          icon={FolderKanban}
        />
        <StatCard
          title="Roles & Permissions"
          value="12 Roles"
          icon={ShieldCheck}
        />
        <StatCard
          title="System Health"
          value="Good"
          icon={Activity}
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Monitoring */}
        <div className="lg:col-span-2 bg-white rounded-xl border p-6">
          <h2 className="text-lg font-semibold mb-4">
            System Monitoring
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MiniCard
              title="API Requests"
              value="12,430 / day"
              icon={Server}
            />
            <MiniCard
              title="Active Sessions"
              value="312"
              icon={Activity}
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-semibold mb-4">
            Recent Alerts
          </h2>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Bell size={16} className="text-blue-500" />
              New user registered
            </li>
            <li className="flex items-center gap-2">
              <Bell size={16} className="text-yellow-500" />
              Server load high
            </li>
            <li className="flex items-center gap-2">
              <Bell size={16} className="text-green-500" />
              Backup completed successfully
            </li>
          </ul>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border p-6">
        <h2 className="text-lg font-semibold mb-4">
          Recent Activity
        </h2>

        <div className="space-y-3 text-sm text-gray-600">
          <p>• Admin updated system settings</p>
          <p>• New project “Planixo CRM” created</p>
          <p>• User role updated to Manager</p>
          <p>• Security scan completed</p>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;

/* Reusable Components */

const StatCard = ({ title, value, icon: Icon }) => (
  <div className="bg-white rounded-xl border p-6 flex items-center gap-4">
    <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
      <Icon size={22} />
    </div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold text-gray-800">
        {value}
      </p>
    </div>
  </div>
);

const MiniCard = ({ title, value, icon: Icon }) => (
  <div className="flex items-center gap-3 border rounded-lg p-4">
    <Icon size={20} className="text-blue-600" />
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-semibold text-gray-800">
        {value}
      </p>
    </div>
  </div>
);
