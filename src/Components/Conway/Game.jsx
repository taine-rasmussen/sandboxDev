import React  from 'react'
import './Conway.css'

const Game = () => {

   const numRows = 30
   const numCols = 30

   // Creates array gird based of dimensions of above varibles 
   const createGrid = () => {
      let grid = [];
      for (let i = 0; i < numRows; i++) {
         let row = [];
      for(let j = 0; j < numCols; j++) {
         row.push(0)
         }
         grid.push(row)
      }
      return grid
   }

   console.log(createGrid())

   return (
      <div className="game-container">
            🛑
      </div>
   )
}

export default Game