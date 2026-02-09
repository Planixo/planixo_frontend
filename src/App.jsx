import React, { useState } from "react";
import Landing from "./Routing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/landing/Login";
import Signup from "./components/landing/Signup";
import VerifyOtp from "./components/landing/VerifyOtp";

<<<<<<< Updated upstream
import DashboardLayout from "./Layout/DashboardLayout";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
=======
import AdminLayout from "./components/Dashboard/Admin/AdminLayout";

>>>>>>> Stashed changes


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


<<<<<<< Updated upstream
      </Routes>
    </BrowserRouter>
=======
          {/* Admin dashboard */ }
         <Route path="/admin" element={<AdminLayout />}>
           {/* <Route index element={<MainDashboard />} /> */}
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
>>>>>>> Stashed changes
  );
}

export default App;