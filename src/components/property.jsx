import React from "react";
import '../style/property.css';
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
  const mailIcon=<p><img src={mail} alt="mail icon" />Contacto</p>;


  return(
    <div className='property'>
      <img className='property-img' src={Imagen} alt="carrusel fotos propiedad" />

      <div className='description-container'>
        <div className='left-stats-container'>
          <div className='location-price-container'>
            <h2 className='location'><img src={LocationIcon} alt="location icon" />{location}</h2>
            <h2 className='price'>{currency}{price}{period}</h2>
          </div>  

          <div className='type-maintenace-container'>
            <h4 className='prop-type'>{propType}</h4>
            <h4 className='maintenace-fees'>+ Expensas {currency}{maintenaceFees}</h4>
          </div>

        <div className='rooms'>
          <div className='room'><img src={SurfaceIcon} alt="surface icon" /> {surface}</div>
          <div className='room'><img src={BedIcon} alt="bed icon" /> {bedrooms}</div> 
          <div className='room'><img src={ToiletIcon} alt="toilet icon" /> {bathrooms}</div>
        </div>
        <div className='description-title'>{descTitle}</div>
          <p className='description'>{desc}</p>
        </div>

        <div className='property-buttons-container'>
          <Button
          buttonType='like-button'
          text={heartIcon} />

          <div className="buttons-right">

          <Button
          buttonType='wsp-button'
          text={wsapIcon} />
          <Button
          buttonType='mail-button'
          text={mailIcon} />

          </div>

        </div>

      </div>
    </div>  );
}

export default Property;