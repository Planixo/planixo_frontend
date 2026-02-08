import React from "react";
import Landing from "./Routing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./components/Dashboard/Admin/AdminLayout";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />


          {/* Admin dashboard */ }
         <Route path="/admin" element={<AdminLayout />}>
           {/* <Route index element={<MainDashboard />} /> */}
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
