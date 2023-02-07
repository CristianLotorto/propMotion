import React from "react";

function Search(){
  return(
    <form id='search'>
      <input className=' font-quantico text-sm h-10 w-72 pl-3 rounded-md shadow-lg border-solid border-2 border-inherit' type="text" placeholder='Buscar' />
    </form>
  );
}

export default Search;