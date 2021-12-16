import React from 'react'
import '../Styles/Landing.css';
import { Link } from 'react-router-dom'

const Landing = () => {


   const projects = ['login', 'hero']


   return (
      <div className="landing-container">
         <div className="landing-header">
            <h1>Welcome to the <span>Sandbox</span></h1>
         </div>
            <div className="landing-links-container">
            {projects.map((projName, index) => {
               return(
                  <div className="landing-link" key={index}>
                    <Link to={projName}>
                        <button>{projName.charAt(0).toUpperCase() + projName.slice(1)}</button>
                     </Link>
                  </div>
               )
           })}
         </div>
      </div>
   )
}

export default Landing