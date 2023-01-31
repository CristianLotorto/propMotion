import React from "react";
import Button from './Button'; 

function Form(){

  return(
    <form>
      <input type="file" name="imgs" multiple />
      <Button
      buttonType={"button banner-button"}
      text="Cargar Img" />

    </form>
  );
}

export default Form;