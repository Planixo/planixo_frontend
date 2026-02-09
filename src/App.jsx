import React, { useState } from "react";
import Landing from "./Routing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/landing/Login";
import Signup from "./components/landing/Signup";

import DashboardLayout from "./Layout/DashboardLayout";
import MainDashboard from "./components/Dashboard/Admin/MainDashboard";



function App() {
 const [user,setUser]=useState({
  name:"Rajpal",
  role:"admin"
 })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} >
          </Route>
           <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 


          {/* Admin dashboard */ }
         <Route path="/dashboard" element={<DashboardLayout />}>
           <Route path="/dashboard/admin" element={<MainDashboard />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
