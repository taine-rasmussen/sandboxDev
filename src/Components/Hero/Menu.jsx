import React from 'react'
import './Heroleft.css'
import { Link } from 'react-router-dom'



const Menu = () => {
   return (
      <div className="menu-container">
         <Link to='/'>
            <li>Home</li>
         </Link>
         <li>Biography</li>
         <li> Galleries</li>
         <li> Trips</li>
         <li>Destinations</li>
         <li>Contact Me</li>
      </div>
   )
}
export default Menu