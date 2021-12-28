import React, { useState, useEffect } from 'react'

const GameInput = ({gridPattern, emptyGrid, setGridPattern}) => {

   const [bgColour, setBgColour] = useState({backgroundColor: '#fff'})
   const [pattern, setPattern] = useState([])

   const handleClick = (id) => { 
   }


   // Takes generated pattern and addeds it to nested array with id's attached
   const sortData = () => {
      gridPattern.forEach((cell, index) => {
         pattern.push({id: index, pattern: cell})
      })
   }
   // Calls sort Data function on page load
   useEffect(() => {
      sortData()
   }, []);
   

   return (
      
      <div className="memory-game-container">
         {emptyGrid.map((cell, index) => {
            return(
               <div 
                  className="memory-game-cell"
                  key={index}
                  style={bgColour}
                  onClick={() => handleClick(index)}
               >   
               </div>
            )
         })}


      </div>
   )
}
export default GameInput