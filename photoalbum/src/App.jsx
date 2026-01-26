"use client";
import { useEffect, useRef, useState } from "react";
import "./index.css";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Auth from "./components/Auth";

const App = () => {
  const [accessToken, setAccessToken] = useState(() => {
    if (typeof window === "undefined") return "";
    const token = localStorage.getItem("accessToken");
    return token ? JSON.parse(token) : "";
  });

  const [photos,setPhotos] = useState([]);

  //const tokenClient = useRef(null);

  // Save token when it changes
  useEffect(() => {
    if (!accessToken) return;
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
  }, [accessToken]);

   const { signIn } = Auth({
    onSuccess: setAccessToken,
  });

  // Init Google OAuth ONCE
  // useEffect(() => {
  //   if (!window.google) return;

  //   tokenClient.current =
  //     window.google.accounts.oauth2.initTokenClient({
  //       client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  //       scope: "https://www.googleapis.com/auth/drive.file",
  //       callback: (tokenResponse) => {
  //         setAccessToken(tokenResponse.access_token);
  //       },
  //     });
  // }, []);

  // const handleSignIn = () => {
  //   tokenClient.current?.requestAccessToken();
  // };

  return !accessToken ? <Login signIn={signIn} /> : <Dashboard />;
};
export default App;
