import React from "react";
import '../style/logout.css';
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton(){
  const {logout}=useAuth0();

  return (
  <p className="logout" onClick={()=>logout({returnTo:window.location.origin})}>
    Salir
  </p>

);
}

export default LogoutButton;