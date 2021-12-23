import React from 'react'
import './User.css'


const User = ({toggleLogin, setToggleLogin}) => {


   return (
      <div className="user-container">
        <div className="user-header">
               <h1>Welcome Back!</h1>
        </div>
        <div className="user-form">
            <div className="user-input user-input-top">
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
            <button>Log in</button>
        </div>
        <div className="user-footer">
           <p>
              Don't have an account? 
              <span onClick={() => setToggleLogin(!toggleLogin)}>Register</span>
           </p>
        </div>
      </div>
   )
}

export default User
