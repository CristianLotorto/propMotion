import { useAuth0 } from '@auth0/auth0-react';
import {React, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

import './App.css';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import Profile from './components/Profile';
import Logo from './components/Logo';
import Button from './components/Button';
import Search from './components/Search';
import Property from './components/Property';
import Ads from './components/Ads';

function App() {

  const {isAuthenticated}=useAuth0();

  // mostrar el menú de 'user settings' cuando se clickea en el boton
  const [hideProperty, setHideProperty]=useState('properties');

  // Funcion para esconder un elemento de clase "name".
  const hideElement=(name)=>{
    if(hideProperty===`${name}`){

      setHideProperty(`${name} hide`);
      setTimeout(()=>setHideProperty(`${name} hide erase`),2000)
      
    }else if(hideProperty===`${name} hide erase`){
      setHideProperty(`${name} hide`);
      setTimeout(()=>setHideProperty(`${name}`),1);
    }
  }

  return (
    <div className="App">

      <header className='header banner-container'>

        
          <Logo />

        <div className='buttons-search-container'>

          <div className='buttons-container'>

            <Button
            buttonType='publish-button banner-button'
            text='Publicar'
            onClick={()=> hideElement('properties')} />


            {
              isAuthenticated ? (
                
                <>

                  <div className='logged-auth'>
                    <Profile />
                    <DropdownButton className='dropdownButton' drop='down-centered' align='centered'>
                      <DropdownMenu>
                        <Dropdown.Item onClick={()=>hideElement('properties')}>Configuracion</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item ><LogoutButton /></Dropdown.Item>
                      </DropdownMenu>
                
                    </DropdownButton>
                
                  </div>
                </>
              ) : 
              (
                <LoginButton className='unlogged-auth'/>
                ) 
              }


          </div>

          <Search />

        </div>
      </header>

      <main className='main'>


      <div className='property-container'>

      <div className='ads-left'>

        <Ads />
        <Ads />
        <Ads />
        <Ads />

      </div>
        
      <div className={hideProperty}>
        
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

      </div>

      </div>

      </main>

      <footer className='footer'>
        
      </footer>

    </div>
  );
}

export default App;
