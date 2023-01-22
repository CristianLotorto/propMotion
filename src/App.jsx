import './App.css';
import Logo from './components/logo';
import Button from './components/button';
import Search from './components/search';
import Property from './components/property';
import Ads from './components/ads';

function App() {
  return (
    <div className="App">

      <div className='banner-container'>

        <Logo />

        <div className='buttons-search-container'>

          <div className='buttons-container'>
            <Button
            buttonType='login-button banner-button'
            text='Ingresar'
            />

            <Button
            buttonType='register-button banner-button'
            text='Registrar' />

            <Button
            buttonType='publish-button banner-button'
            text='Publicar' />

          </div>

          <Search />

        </div>


      </div>


      <div className='property-container'>

      <div className='ads-left'>

        <Ads />
        <Ads />
        <Ads />
        <Ads />

      </div>
        
      <div className='properties'>
        
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

    </div>
  );
}

export default App;
