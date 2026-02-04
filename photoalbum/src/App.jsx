"use client";
import { useEffect, useState } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Auth from "@/components/Auth";
import Upload from "@/components/Upload";

const App = () => {
  const [accessToken, setAccessToken] = useState(() => {
    if (typeof window === "undefined") return "";
    const token = localStorage.getItem("accessToken");
    return token ? JSON.parse(token) : "";
  });

  useEffect(() => {
    if (!accessToken) return;
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
  }, [accessToken]);

  const { signIn } = Auth({
    onSuccess: setAccessToken,
  });

  return !accessToken ? <Login signIn={signIn} /> : <Dashboard />;
};
export default App;
