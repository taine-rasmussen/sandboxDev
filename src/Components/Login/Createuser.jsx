import React from 'react'
import './Createuser.css'

const Createuser = ({toggleLogin, setToggleLogin}) => {


   return (
      <div className="createuser-container">
        <div className="createuser-header">
               <h1>Create Account</h1>
        </div>
        <div className="createuser-form">
            <div className="createuser-input">
               <label>NAME</label>
               <input 
                  type="text"
               />
            </div>
            <div className="createuser-input">
               <label>EMAIL</label>
               <input 
                  type="email"
               />
            </div>
            <div className="createuser-passowrds">
               <div className="createuser-input">
                  <label>PASSWORD</label>
                  <input 
                     type="password"
                  />
               </div>
                   <div className="createuser-input">
                  <label>RETYPE PASSWORD</label>
                  <input 
                     type="password"
                  />
               </div>
            </div>
            <button>Create account</button>
        </div>
        <div className="createuser-footer">
           <p>
              Already have an account? 
              <span onClick={() => setToggleLogin(!toggleLogin)}>Log in</span>
           </p>
        </div>
      </div>
   )
}
export default Createuser