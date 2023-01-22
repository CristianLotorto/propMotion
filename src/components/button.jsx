import React from "react";
import '../style/button.css'

function Button({text, buttonType, logIn,register,publish}){



  return(

      <button className={buttonType}>

        {text}
        
      </button>

  );
}

export default Button;