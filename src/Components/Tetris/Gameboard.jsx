import React, { useState } from 'react'
import './Gameboard.css'
import thisIsStupid from './dontLookInHere'

// 0 === empty cell 
// 1 === filled cell

const Gameboard = () => {

   const [cells, setCells] = useState(thisIsStupid)



   const createShape = () => {

console.log(cells)

     
   }

   return (
      <div className="gameboard-container">
         <div className="gameboard-area">
            <div className="gameboard-game">
               {cells.map((cell, index) => {
                  return(
                     <div 
                        key={index} 
                        id={cell.id}
                        className="gameboard-cell"
                        style={cell.style}
                     >{cell[1]}   
                  </div>
                  )
               })}
            </div>
         </div>
         <button onClick={createShape}>?????</button>
      </div>
   )
}

export default Gameboard
