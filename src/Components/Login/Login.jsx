import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

// Components
import Createuser from './Createuser'
import User from './User'

const Login = () => {

   const [toggleLogin, setToggleLogin] = useState(false)

   return (
      <div className="login-container">
         <div className="login-header-container">
            <h1>Example log in page</h1>
            <Link to='/'>
               <button>Home</button>
            </Link>
         </div>

         <div className="login-form-container">
            {toggleLogin ? 
               <User setToggleLogin={setToggleLogin} toggleLogin={toggleLogin}/> :
               <Createuser setToggleLogin={setToggleLogin} toggleLogin={toggleLogin}/>
            }
         </div>
      </div>
   )
}
export default Login