import React from "react";


function UserSettings(){
  return(
    <div className="userSettings-container">
      <form className="userSettings">
        <input type="text" placeholder='Email' />

        <label htmlFor="passChange1">Cambair Contraseña</label>
        <input name="passChange1" type="text" placeholder='Nueva Contraseña' />
        <input name="passChange2" type="text" placeholder='Repetir Nueva Contraseña' />

        <label htmlFor="name">Datos Personales</label>
        <input name='name' type="text" placeholder='Nombre' />
        <input name='state' type="text" placeholder='Provincia' />
        <input name='city' type="text" placeholder='Ciudad' />
        
        <div className="phoneNumber-container">
          
        <input name='prefix' type="number" placeholder='Prefijo' />
        <input name='phoneNumber' type="number" placeholder='Telefono Móvil' />

        </div>

      </form>
    </div>
  );
}

export default UserSettings;