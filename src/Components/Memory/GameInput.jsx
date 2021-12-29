import React from 'react'

const GameInput = ({pattern}) => {


   const handleClick = (id) => { 
   }


   return ( 
         <div className="memory-game-container">
            {pattern.map((cell, index) => {
               console.log(cell.style)
               return(
                  <div 
                     className="memory-game-cell"
                     key={index}
                     style={cell.style}
                     onClick={() => handleClick(index)}
                  >   
                  </div>
               )
            })}
         </div>
   )
}
export default GameInput