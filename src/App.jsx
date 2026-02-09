import React, { useState } from "react";
import Landing from "./Routing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/landing/Login";
import Signup from "./components/landing/Signup";
import VerifyOtp from "./components/landing/VerifyOtp";

import DashboardLayout from "./Layout/DashboardLayout";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";


function App() {
 const [user,setUser]=useState({
  name:"Rajpal",
  role:"admin"
 })
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
             
          {/* Employee Dashboard    */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;