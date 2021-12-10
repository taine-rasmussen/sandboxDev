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

         <div className="login-form-container">
            <form className="login-form">
               <input
                  type="text"/>
               <input 
                  type="password"/>
                  <button>Login</button>
                  <h4>already have account?</h4>
            </form>
         </div>







      </div>
   )
}
export default Login