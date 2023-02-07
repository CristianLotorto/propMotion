import React from "react";
import Imagen from '../img/Logo.png';

function Ads(){
  return(

    <div className='w-64 h-full flex justify-between items-center min-h-250 mt-4 mx-4 bg-neutral-700 p-5 flex-col'>

      <h3 className=' text-slate-100 mb-5'>Publicidaes</h3>
      <img className='w-full h-full bg-slate-400' src={Imagen} alt="Adv" />

    </div>
    
  );
};

export default Ads;