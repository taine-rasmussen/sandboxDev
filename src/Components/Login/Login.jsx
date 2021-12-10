import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
   return (
      <div className="login-container">
         <div className="login-header-container">
            <h1>Example log in page</h1>
            <Link to='/'>
               <button>Home</button>
            </Link>
         </div>

      </div>
   )
}
export default Login