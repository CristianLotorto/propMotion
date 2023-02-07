import { useAuth0 } from '@auth0/auth0-react';
import {React, useState} from 'react';

import { Transition } from '@headlessui/react'

import LoginButton from './components/Login';
import Logo from './components/Logo';
import Button from './components/Button';
import Search from './components/Search';
import Property from './components/Property';
import Ads from './components/Ads';
import DropdownMenu from './components/DropdownMenu';
import { getValue } from '@testing-library/user-event/dist/utils';

function App() {
  const configButton=document.getElementById('configuration');
  console.log(getValue(document.getElementById('configuration')));

  const {isAuthenticated}=useAuth0();

  // mostrar el menú de 'user settings' cuando se clickea en el boton
  const [hideProperty, setHideProperty]=useState(true);


  return (
    <div className="App">

      <header id='header' className='w-full h-56 bg-gradient-to-bl from-neutral-700 to-nautral-900 banner-container flex items-center justify-between mt-2 shadow-lg'>

        
          <Logo />

        <div className='mr-10 flex-col justify-between items-center'>

          <Search />

          <div className='w-auto flex items-center justify-center mt-8 mr-7'>

            <Button
            buttonType="w-33 h-10 mr-5"
            text='Publicar'
            onClick={()=>setHideProperty((hideProperty) => !hideProperty)} />

            
            {
              isAuthenticated ? (
                
                <>
                
                    <DropdownMenu />
                    

                </>
              ) : 
              (
                <LoginButton className='unlogged-auth'/>
                ) 
              }


          </div>


        </div>
      </header>

      <main className='main'>


      <div id='ads-property-container' className='w-full flex justify-between'>

      <div id='ads-container' className='w-64 h-full mr-10 flex-col items-center justify-around'>

        <Ads />
        <Ads />
        <Ads />
        <Ads />

      </div>

    
      <Transition
      as='div' id='property-container' className='mr-5'
      show={hideProperty}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-1000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      >
      
        
      <Property
      location='Direccion'
      currency={'$'}
      price={75000}
      period='/mes'
      maintenaceFees={4500}
      propType='Tipo de inmueble'
      surface='Superficie'
      bedrooms='Dormitorios' 
      bathrooms='Baños'
      descTitle='Titulo Descripcion'
      desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />

      <Property 
      location='Direccion'
      currency={'$'}
      price={75000}
      period='/mes'
      maintenaceFees={4500}
      propType='Tipo de inmueble'
      surface='Superficie'
      bedrooms='Dormitorios' 
      bathrooms='Baños'
      descTitle='Titulo Descripcion'
      desc='Lorem ipsum dolor sit amet, consectetadipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniaquis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolin reprehenderit in voluptate velit esse cillum doloeu fugiat nulla pariatur. Excepteur sint occaeccupidatat non proident, sunt in culpa qui officdeserunt mollit anim id est laborum.'/>
      <Property  
      location='Direccion'
      currency={'$'}
      price={75000}
      period='/mes'
      maintenaceFees={4500}
      propType='Tipo de inmueble'
      surface='Superficie'
      bedrooms='Dormitorios' 
      bathrooms='Baños'
      descTitle='Titulo Descripcion'
      desc='Lorem ipsum dolor sit amet, consectetadipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniaquis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolin reprehenderit in voluptate velit esse cillum doloeu fugiat nulla pariatur. Excepteur sint occaeccupidatat non proident, sunt in culpa qui officdeserunt mollit anim id est laborum.'/>
      <Property  
      location='Direccion'
      currency={'$'}
      price={75000}
      period='/mes'
      maintenaceFees={4500}
      propType='Tipo de inmueble'
      surface='Superficie'
      bedrooms='Dormitorios' 
      bathrooms='Baños'
      descTitle='Titulo Descripcion'
      desc='Lorem ipsum dolor sit amet, consectetadipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniaquis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolin reprehenderit in voluptate velit esse cillum doloeu fugiat nulla pariatur. Excepteur sint occaeccupidatat non proident, sunt in culpa qui officdeserunt mollit anim id est laborum.'/>
      <Property 
      location='Direccion'
      currency={'$'}
      price={75000}
      period='/mes'
      maintenaceFees={4500}
      propType='Tipo de inmueble'
      surface='Superficie'
      bedrooms='Dormitorios' 
      bathrooms='Baños'
      descTitle='Titulo Descripcion'
      desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      <Property 
      location='Direccion'
      currency={'$'}
      price={75000}
      period='/mes'
      maintenaceFees={4500}
      propType='Tipo de inmueble'
      surface='Superficie'
      bedrooms='Dormitorios' 
      bathrooms='Baños'
      descTitle='Titulo Descripcion'
      desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>

      </Transition>

      </div>

      </main>

      <footer className='footer'>
        
      </footer>

    </div>
  );
}

export default App;
