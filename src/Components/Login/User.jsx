import React from 'react'
import './User.css'


const User = () => {
   return (
      <div className="user-container">
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
                     <h4>Need to create account?</h4>
                  </div>
            </form>
      </div>
   )
}

export default User
