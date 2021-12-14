import React from 'react'
import './User.css'


const User = ({toggleLogin, setToggleLogin}) => {
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
                     <button className="btn-hover">Login</button>
                     <button onClick={() => {setToggleLogin(!toggleLogin)}}><span>Need to create account?</span></button>
                  </div>
            </form>
      </div>
   )
}

export default User
