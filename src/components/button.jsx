import React from "react";

function Button({text, buttonType, logIn, register, publish, onClick}){


  return(

      <button
      className={`${buttonType} items-center justify-center flex font-quantico tracking-widest bg-yellow-800 hover:bg-yellow-700  text-slate-100 font-extrabold rounded-md shadow-lg`}
      onClick={onClick}
      >

        {text}
        
      </button>

  );
}

export default Button;