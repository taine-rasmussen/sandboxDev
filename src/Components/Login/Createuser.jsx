import React from 'react'
import './Createuser.css'

const Createuser = ({toggleLogin, setToggleLogin}) => {


   return (
      <div className="createuser-container">
            <form >
               <input 
                  placeholder="Username..."
                  type="text"
               />
               <input 
                  placeholder="Email..."
                  type="text"
               />
               <input 
                  placeholder="Password..."
                  type="text"
               />
                <div className="createuser-form-footer">
                     <button>Create user</button>
                     <h4 onClick={() => {setToggleLogin(!toggleLogin)}}>Already have an account?</h4>
                  </div>
            </form>
      </div>
   )
}
export default Createuser