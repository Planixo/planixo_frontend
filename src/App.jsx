import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Landing from "./Routing/Landing";
import Login from "./components/landing/Login";
import Signup from "./components/landing/Signup";
import VerifyOtp from "./components/landing/VerifyOtp";

// Dashboard Layout
import DashboardLayout from "./Layout/DashboardLayout";

// Dashboard Pages
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/Employee/EmployeeDashboard";
import ProjectManagerDashboard from "./components/Dashboard/ProjectManager/ProjectManagerDashboard";
import AllUsers from "./pages/AllUsers";
import AllTeams from "./pages/AllTeams";

export default function App() {
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

          {/* ADMIN */}
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="users" element={<AllUsers />} />
          <Route path="teams" element={<AllTeams />} />

          {/* PROJECT MANAGER */}
          <Route
            path="projectmanager"
            element={<ProjectManagerDashboard />}
          />

          {/* EMPLOYEE */}
          <Route path="employee" element={<EmployeeDashboard />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
