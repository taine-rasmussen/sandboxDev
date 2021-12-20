import React, { useState } from 'react'
import './Login.css'

// Components
import Createuser from './Createuser'
import User from './User'

const Login = () => {

   const [toggleLogin, setToggleLogin] = useState(false)

   return (
      <div className="login-container">
         <div className="login-body-container">
            <User />
         </div>
      </div>
   )
}
export default Login