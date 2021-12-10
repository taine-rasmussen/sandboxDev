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
                  type="text"
                  placeholder='Username...'
               />
               <input 
                  type="password"
                  placeholder='Password...'
               />
                  <div className="login-form-footer">
                     <button>Login</button>
                     <h4>Already have an account?</h4>
                  </div>
            </form>
         </div>







      </div>
   )
}
export default Login