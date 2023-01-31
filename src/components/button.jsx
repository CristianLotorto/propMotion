import React from "react";
import '../style/button.css'

function Button({text, buttonType, logIn,register,publish, onClick}){


  return(

      <button 
      className={buttonType}
      onClick={onClick}
      >

        {text}
        
      </button>

  );
}

export default Button;