import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css';
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Auth from "@/components/Auth";
import Upload from "@/components/Upload";
import Puchu from "@/components/Puchu";
import Logout from "@/components/Logout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/puchu" element={<Puchu />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/logout" element={<Logout />} />
    </Routes>
  </BrowserRouter>
);
