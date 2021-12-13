import React from 'react'
import './Createuser.css'

const Createuser = ({toggleLogin, setToggleLogin}) => {


   return (
      <div className="createuser-container">
         <div className="createuser-form-container">
            <form>
               <div className='createuser-details'>
                  <input 
                     placeholder="Username..."
                     type="text"
                  />
                  <input 
                     placeholder="Email..."
                     type="text"
                  />
               </div>
               <div className='createuser-password'>
                  <input 
                     placeholder="Password..."
                     type="password"
                  />
                  <input 
                     placeholder="Re-type Password..."
                     type="password"
                  />
               </div>
                <div className="createuser-form-footer">
                     <button>Create user</button>
                     <button onClick={() => {setToggleLogin(!toggleLogin)}}><span>Already have an account?</span></button>
                  </div>
            </form>
         </div>
      </div>
   )
}
export default Createuser