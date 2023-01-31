import React from "react";
import logo from '../img/ent7.png';
import '../style/logo.css';

function Logo(){
  return(
    
    <div className='banner-logo-container'>

      <a href="http://localhost:3000">
        <img src={logo} alt="PropMotion Logo" />
    
        <h1>
          PropMotion
        </h1>
      </a>

    </div>

  );
}

export default Logo;