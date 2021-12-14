import React from 'react'
import '../Styles/Landing.css';
import { Link } from 'react-router-dom'

const Landing = () => {
   return (
      <div className="landing-container">
         <div className="landing-header">
            <h1>Welcome to the Sandbox</h1>
         </div>
         <div className="landing-links-container">
            <div className="landing-link">
               <Link to='login'>
                  <button>Log in page</button>
               </Link>
            </div>
            <div className="landing-link">
               <Link to='hero'>
                  <button>Hero example</button>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Landing