import React from "react";
<<<<<<< Updated upstream
import Landing from "./Routing/Landing";
=======
>>>>>>> Stashed changes
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Routing/Landing";
import Login from "./components/landing/Login";
import Signup from "./components/landing/Signup";
import VerifyOtp from "./components/landing/VerifyOtp";

import DashboardLayout from "./Layout/DashboardLayout";
<<<<<<< Updated upstream
import MainDashboard from "./components/Dashboard/Admin/MainDashboard";

function App() {
=======
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/Employee/EmployeeDashboard";
import ProjectManagerDashboard from "./components/Dashboard/ProjectManager/ProjectManagerDashboard";

import AllUsers from "./pages/AllUsers";

export default function App() {
>>>>>>> Stashed changes
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        {/* ================= DASHBOARD WRAPPER ================= */}
        <Route path="/dashboard" element={<DashboardLayout />}>
<<<<<<< Updated upstream
          <Route path="admin" element={<MainDashboard />} />
        </Route>
=======

          {/* ADMIN */}
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="users" element={<AllUsers />} />

          {/* PROJECT MANAGER */}
          <Route path="projectmanager" element={<ProjectManagerDashboard />} />

          {/* EMPLOYEE */}
          <Route path="employee" element={<EmployeeDashboard />} />

        </Route>

>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}

export default App;