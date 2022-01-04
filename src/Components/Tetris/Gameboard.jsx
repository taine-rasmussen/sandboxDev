import React, { useState } from 'react'
import './Gameboard.css'



const Gameboard = () => {

   const gameCell = <div></div>
   const [cells, setCells] = useState(Array(200).fill(gameCell))




   return (
      <div className="gameboard-container">
         <div className="gameboard-area">
            <div className="gameboard-game">
               {cells.map((cell, index) => {
                  return(
                     <div key={index} className="gameboard-cell">{cell}</div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Gameboard
