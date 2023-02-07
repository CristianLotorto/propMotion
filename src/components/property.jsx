import React from "react";
import Imagen from '../img/Logo.png';
import BedIcon from '../img/icons8-cama-vacía-100.png';
import ToiletIcon from '../img/icons8-clean-toilet-100.png';
import SurfaceIcon from '../img/icons8-superficie-100.png';
import LocationIcon from '../img/icons8-marker-o-100.png';
import Button from './Button';
import heart from '../img/heart.png';
import wsap from '../img/icons8-whatsapp-100.png';
import mail from '../img/icons8-mensaje-100.png';


function Property({location,currency, price, period, maintenaceFees, propType, surface, bedrooms, bathrooms, descTitle, desc}){

  const heartIcon=<img src={heart} alt="like icon" />;
  const wsapIcon=<img src={wsap} alt="whatsapp icon" />;
  const mailIcon=<p className="w-4/5 flex justify-between"><img src={mail} alt="mail icon" />Contacto</p>;


  return(
    <div id="property" className='w-full h-80 flex mt-4 bg-slate-700 rounded-md'>
      <img className='w-96 h-80 bg-green-900 rounded-l-md p-16' src={Imagen} alt="carrusel fotos propiedad" />

      <div className='w-full felx-col justify-between mx-10 font-sawarabi text-slate-100 description-container'>
        <div>
          <div className='flex justify-between items-center font-quantico font-bold my-4'>
            <h2 className='flex text-2xl tracking-widest items-center'><img className="w-5 h-5 mr-2" src={LocationIcon} alt="location icon" />{location}</h2>
            <h2 className='text-3xl tracking-wider'>{currency}{price}{period}</h2>
          </div>  

          <div className='flex justify-between items-center tracking-wide type-maintenace-container'>
            <h4 className='text-sm font-light mb-5'>{propType}</h4>
            <h4 className='mr-12 font-light -mt-5'>+ Expensas {currency}{maintenaceFees}</h4>
          </div>

        <div className='flex mb-10'>
          <div className='flex item-center mr-10'><img className="w-5 h-5 mr-3" src={SurfaceIcon} alt="surface icon" /> {surface}</div>
          <div className='flex item-center mr-10'><img className="w-5 h-5 mr-3" src={BedIcon} alt="bed icon" /> {bedrooms}</div> 
          <div className='flex item-center mr-10'><img className="w-5 h-5 mr-3" src={ToiletIcon} alt="toilet icon" /> {bathrooms}</div>
        </div>
        <div className='mb-3'>{descTitle}</div>
          <p className=' max-w-4/5 h-12 mr-7 mb-3 overflow-ellipsis overflow-hidden whitespace-normal'>{desc}</p>
        </div>

        <div className='flex ml-2 mb-4 items-end justify-between'>
          <Button
          buttonType='w-10 h-10'
          text={heartIcon} />

          <div className="w-48 flex items-center justify-between">

          <Button
          buttonType='w-10 h-10'
          text={wsapIcon} />
          <Button
          buttonType='w-33 h-10 '
          text={mailIcon} />

          </div>

        </div>

      </div>
    </div>  );
}

export default Property;