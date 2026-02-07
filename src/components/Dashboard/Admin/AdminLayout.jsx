import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { sidebarItems } from "../../../../SidebarConfig";

import Header from "./Header";
const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar sidebarItems={sidebarItems}/>

      {/* Right Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
