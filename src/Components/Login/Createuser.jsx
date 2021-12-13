import React from 'react'

const Createuser = () => {

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
            </form>
      </div>
   )
}
export default Createuser