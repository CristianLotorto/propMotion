import React from "react";
import logo from '../img/ent7.png';

function Logo(){
  return(
    
    <div className='h-40 w-52 flex place-content-center relative ml-16'>

      <a href="http://localhost:3000" className="flex items-center justify-center">
        <img className="w-48 h-full absolute opacity-90" src={logo} alt="PropMotion Logo" />
    
        <h1 className="z-10 font-quantico text-center text-4xl antialiased font-extrabold text-white tracking-widest relative top-10 opacity-75">
          PropMotion
        </h1>
      </a>

    </div>

  );
}

export default Logo;