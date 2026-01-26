import { useEffect, useRef } from "react";
const Auth=({onSuccess})=>{
    const tokenClient = useRef(null);
    useEffect(() => {
       console.log("Auth useEffect running");
        if (!window.google){
          console.log("Google script not loaded yet");
          return;
        }
        console.log("Google script loaded");
        tokenClient.current =
          window.google.accounts.oauth2.initTokenClient({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            scope: "https://www.googleapis.com/auth/drive.file",
            callback: (tokenResponse) => {
              onSuccess(tokenResponse.access_token);
            },
          });
      }, [onSuccess]);
       const SignIn = () => {
    tokenClient.current?.requestAccessToken();
  };

    return(
        {SignIn}
    )
};
export default Auth