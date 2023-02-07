import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton(){
  const {logout}=useAuth0();

  return (
  <p className="text-slate-100 text-center w-full h-full font-quantico tracking-widest font-semibold" onClick={()=>logout({returnTo:window.location.origin})}>
    Salir
  </p>

);
}

export default LogoutButton;