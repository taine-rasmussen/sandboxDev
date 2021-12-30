import React, {useState} from 'react'

const GameInput = ({pattern, winningGrid, resetGame}) => {

   const [gameHeader, setGameHeader] = useState('')

   let gameTracker = [[1], [1], [1], [1], [1], [1], [1], [1], [1]]

   // Function used on player click checking win conditions & updating game header on win or loss
   const checkForWin = () => {
      let filledCells = null
      let playerFilledCells = 0
      // Gets num of cells filled from generated pattern
      winningGrid.forEach((cell) => {
         if(cell == 0){
            return filledCells += 1
         }
      })
      // Gets num of cells filled by player
      gameTracker.forEach((cell) => {
         if(cell == 0){
            return playerFilledCells += 1
         }
      })
      // Checks if playerFilledCells and generated pattern are the same and updates gameHeader
      if(filledCells == playerFilledCells){
         setGameHeader('You Won!')
      }
   }

   // Checks if cell was part of pattern and changes bg if true else triggers gameover header to appear
   const handleClick = (id) => {  
     if(document.getElementById(`${id}`) && pattern[id].pattern == 0){
      document.getElementById(`${id}`).style.background = '#000'
      gameTracker[id] = [0]
      checkForWin()
     }
     else {
        setGameHeader('Game over!')
     }
   }



   return ( 
      <>
         <h1>{gameHeader}</h1>
         <div className="memory-game-container">
            {pattern.map((cell, index) => {
               return(
                  <div 
                     className="memory-game-cell"
                     key={index}
                     id={cell.id}
                     style={cell.style}
                     onClick={() => handleClick(cell.id)}
                  >   
                  </div>
               )
            })}
         </div>

         <button onClick={resetGame}>Reset Game</button>
      </>
   )
}
export default GameInput