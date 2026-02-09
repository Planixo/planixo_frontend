import { Bell, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-16 bg-white/80 backdrop-blur
      border-b border-blue-100
      flex items-center justify-between px-6"
    >
      {/* Left */}
      <h1 className="text-lg font-semibold text-gray-800">
        Dashboard
      </h1>

      {/* Center */}
      <div className="hidden md:flex items-center
        bg-blue-50 border border-blue-100
        rounded-xl px-3 py-2 w-1/3"
      >
        <Search size={18} className="text-blue-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-2 text-sm w-full text-gray-700"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="relative p-2 rounded-lg hover:bg-blue-100">
          <Bell size={20} className="text-blue-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2 cursor-pointer
          px-3 py-1.5 rounded-xl hover:bg-blue-100"
        >
          <User size={20} className="text-blue-600" />
          <span className="text-sm font-medium text-gray-700">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
