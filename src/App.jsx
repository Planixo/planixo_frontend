import React, { useState } from "react";
import Landing from "./Routing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/landing/Login";
import Signup from "./components/landing/Signup";
import VerifyOtp from "./components/landing/VerifyOtp";
import DashboardLayout from "./Layout/DashboardLayout";
import AdminDashboard from "../src/components/Dashboard/Admin/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/Employee/EmployeeDashboard";
import ProjectManagerDashboard from "./components/Dashboard/ProjectManager/ProjectManagerDashboard";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔐 OTP Verification */}
        <Route path="/verify-otp" element={<VerifyOtp />} />

        {/* Admin Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

           {/* project manager dashboard */}
           <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="projectmanager" element={<ProjectManagerDashboard/>} />
        </Route>

        {/* Employee Dashboard    */}
         <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="employee" element={<EmployeeDashboard />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}
