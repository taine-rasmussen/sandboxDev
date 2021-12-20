import React from 'react'
import './User.css'


const User = () => {
   return (
      <div className="user-container">
        <div className="user-header">
            <h1>Welcome Back!</h1>
        </div>
        <div className="user-form">
            <div className="user-input">
               <label>EMAIL</label>
               <input 
                  type="email"
               />
            </div>
            <div className="user-input">
               <label>PASSWORD</label>
               <input 
                  type="password"
               />
            </div>
        </div>
      </div>
   )
}

export default User
