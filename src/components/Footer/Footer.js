import React from 'react';
import logo_white from './logo_white.svg';

const Footer = () => {
 return (
   <footer id='down' className='pt-4 pt-md-5'>
     <div className='container pb-5'>
       <div className='row'>
         <div className='col-12 col-md'>
           <img className='mb-2' src={logo_white} alt='' width='70' height='70'></img>
           <small className='d-block mb-3 text-white'>© 2018-2019 / Jason Pautard</small>
         </div>
         <div className='col-6 col-md'>
           <h5 className='text-white'>Partenaires</h5>
           <ul className='list-unstyled text-small'>
             <li><a className='text-white' href='/'>Jason Pautard</a></li>
           </ul>
         </div>
         <div className='col-6 col-md'>
           <h5 className='text-white'>Languages</h5>
           <ul className='list-unstyled text-small'>
             <li><a className='text-white' href='/'>HTML</a></li>
             <li><a className='text-white' href='/'>CSS</a></li>
             <li><a className='text-white' href='/'>JavaScript</a></li>
           </ul>
         </div>
         <div className='col-6 col-md'>
           <h5 className='text-white'>Framework</h5>
           <ul className='list-unstyled text-small'>
             <li><a className='text-white' href='/'>Bootstrap</a></li>
             <li><a className='text-white' href='/'>React</a></li>
             <li><a className='text-white' href='/'>Redux</a></li>
             <li><a className='text-white' href='/'>Node.js</a></li>
             <li><a className='text-white' href='/'>Express.js</a></li>
           </ul>
         </div>
       </div>
       </div>
     </footer>
        );
}

export default Footer;
