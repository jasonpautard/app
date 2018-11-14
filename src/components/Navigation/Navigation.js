import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.svg';

const Navigation = ({ onRouteChange, isSignedIn }) => {
if(isSignedIn) {
 return (
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
              <a className='navbar-brand' href='/'>
                <Tilt className='Tilt' options={{ maxTilt: 20, scale: 1.2, speed: 1, perspective: 100}}>
                <div className='Tilt-inner'><img src={logo} width='90' height='90' alt='logo'></img></div>
                </Tilt>
              </a>
              <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>

              <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                </ul>
                <button onClick={() => onRouteChange('signout')} className='btn btn-success mb-2'>Se déconnecter</button>
              </div>
            </div>
          </nav>
        );
      } else {
      return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>
            <a className='navbar-brand' href='/'>
              <Tilt className='Tilt' options={{ maxTilt: 20, scale: 1.2, speed: 1, perspective: 100}}>
              <div className='Tilt-inner'><img src={logo} width='90' height='90' alt='logo'></img></div>
              </Tilt>
            </a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
              </ul>
              <button onClick={() => onRouteChange('signin')} className='btn btn-success mb-2 mr-2'>Se connecter</button>
              <button onClick={() => onRouteChange('register')} className='btn btn-success mb-2'>S'enregistrer</button>
            </div>
          </div>
        </nav>
      );
      }
}

export default Navigation;
