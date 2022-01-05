import React, { useState } from 'react'
import './Gameboard.css'



const Gameboard = () => {

   const [cells, setCells] = useState(Array(200).fill(['empty']))
   const greyBg = {backgroundColor: '#A9A9A9'}


   const createShape = () => {
      
   }


   return (
      <div className="gameboard-container">
         <div className="gameboard-area">
            <div className="gameboard-game">
               {cells.map((cell, index) => {
                  return(
                     <div 
                        key={index} 
                        className="gameboard-cell"
                        style={cell == 'empty' ? greyBg : {backgroundColor: 'blue'}}
                     >{cell[1]}   
                  </div>
                  )
               })}
            </div>
         </div>
         <button>?????</button>
      </div>
   )
}

export default Gameboard
