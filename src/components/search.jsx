import React from "react";
import '../style/search.css';

function Search(){
  return(
    <form className='search'>
      <input type="text" placeholder='Buscar' />
    </form>
  );
}

export default Search;