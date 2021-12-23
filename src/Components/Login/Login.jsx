import React, { useState } from 'react'
import './Login.css'

// Components
import Createuser from './Createuser'
import User from './User'

const Login = () => {

   const [toggleLogin, setToggleLogin] = useState(true)

   return (
      <div className="login-container">
         <div className="login-body-container">
            {
               toggleLogin ?
               <User toggleLogin={toggleLogin} setToggleLogin={setToggleLogin}/> :
               <Createuser toggleLogin={toggleLogin} setToggleLogin={setToggleLogin}/>
            }
         </div>
      </div>
   )
}
export default Login