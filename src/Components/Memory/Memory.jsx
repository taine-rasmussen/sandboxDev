import React, { useState } from 'react';
import './Memory.css'


const Memory = () => {


   const [gameCell1, setGameCell1] = useState(false)
   const [gameCell2, setGameCell2] = useState(false)
   const [gameCell3, setGameCell3] = useState(false)
   const [gameCell4, setGameCell4] = useState(false)
   const [cellStyle, setCellStyle] = useState({backgroundColor: '#fff'})


   // Object used to store change of bg color for cells
    const cellStyleTrue = {
      backgroundColor: '#000'
   }

   // triggered onClick this function updates the cell state triggering the cells bg colour
   const updateCell1 = () => {
         setGameCell1(!gameCell1)
   }

    const updateCell2 = () => {
         setGameCell2(!gameCell2)
   }

    const updateCell3 = () => {
         setGameCell3(!gameCell3)
   }

    const updateCell4 = () => {
         setGameCell4(!gameCell4)
   }

   

   return(
      <div className="memory-container">
         <div className="memory-game-container">
            <div  className="memory-game-cell" 
                  style={gameCell1 ? cellStyleTrue : cellStyle} 
                  onClick={updateCell1}
               >{gameCell1}
            </div>
           <div  className="memory-game-cell" 
                  style={gameCell2 ? cellStyleTrue : cellStyle} 
                  onClick={updateCell2}
               >{gameCell2}
            </div>
            <div  className="memory-game-cell" 
                  style={gameCell3 ? cellStyleTrue : cellStyle} 
                  onClick={updateCell3}
               >{gameCell3}
            </div>
            <div  className="memory-game-cell" 
                  style={gameCell4 ? cellStyleTrue : cellStyle} 
                  onClick={updateCell4}
               >{gameCell4}
            </div>
         </div>
      </div>
   )
}

export default Memory;