import React, {useState}  from 'react'
import './Conway.css'


const Game = () => {
   
   const numRows = 30
   const numCols = 30


   // Creates array gird based of dimensions of above varibles 
   const createGrid = () => {
      const rows = [];
      for (let i = 0; i < numRows; i++) {
         rows.push(Array.from(Array(numCols), () => 0));
      }
      return rows;
   }

   
   const [grid, setGrid] = useState(() => {
      return createGrid()
   })
   

   return (
      <div className="game-container">
         <div className="game-area"  style={{display: 'grid', gridTemplateColumns: `repeat(${numCols}, 20px)`}}>
            {grid.map((rows, i) => 
               rows.map((col, k) => (
                  <div 
                     key={`${i}-${k}`}
                     style={{
                        width: 20,
                        height: 20,
                        backgroundColor: grid[i][k] ? 'pink' : undefined,
                        border: '1px solid #000'
                     }}
                  />
               )))}
         </div>
      </div>
   )
}

export default Game


