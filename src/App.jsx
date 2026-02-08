import React from "react";
import Landing from "./Routing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/landing/Login";
import Signup from "./components/landing/Signup";
import AdminLayout from "./components/Dashboard/Admin/AdminLayout";
import MainDashboard from "./components/Dashboard/Admin/MainDashboard";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} >
          </Route>
           <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 


          {/* Admin dashboard */ }
         <Route path="/admin" element={<AdminLayout />}>
           <Route index element={<MainDashboard />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
