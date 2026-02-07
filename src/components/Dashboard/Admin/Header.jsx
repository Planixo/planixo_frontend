import { Bell, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>
      </div>

      {/* Center */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-1/3">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search users, projects..."
          className="bg-transparent outline-none px-2 text-sm w-full"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <User size={20} />
          <span className="text-sm font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
