import React, { useState } from "react";
import axios from "axios";


import Landing from "/Pages/Landing.jsx";
import Dashboard from "/Pages/Dashboard.jsx";
import History from "/Pages/History.jsx";
import About from "/Pages/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {



  return (

   
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/history" element={<History />} />

        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;