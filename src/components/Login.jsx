import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Button";

function LoginButton(){
  const {loginWithRedirect}= useAuth0();

  return (
  <Button 
  onClick={()=>loginWithRedirect()}
  buttonType="button banner-button"
  text='Ingresar' />);
}

export default LoginButton;
