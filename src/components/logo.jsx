import React from "react";
import logo from '../img/Logo4_preview_rev_2.png';
import '../style/logo.css';

function Logo(){
  return(
    <div className='banner-logo-container'>

      <img src={logo} alt="PropMotion Logo" />

      <h1>
        PropMotion
      </h1>

    </div>
  );
}

export default Logo;