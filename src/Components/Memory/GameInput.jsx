import React, {useState} from 'react'

const GameInput = ({pattern, winningGrid}) => {


   const [gameHeader, setGameHeader] = useState('')

   let gameTracker = [[1], [1], [1], [1], [1], [1], [1], [1], [1]]


   // Checks if cell was part of pattern and changes bg if true else triggers gameover header to appear
   const handleClick = (id) => { 
      
     // Handles changing bg colour of cell and triggering gameover on wrong cell click
     if(document.getElementById(`${id}`) && pattern[id].pattern == 0){
      document.getElementById(`${id}`).style.background = '#000'
      gameTracker[id] = [0]
      console.log(gameTracker)
     }
     else {
        setGameHeader('Game over')
     }
   }

   // Checks if winningGrid === gameTracker triggering win notification
   const checkForWin = () => {

   }
   checkForWin()

   // console.log(winningGrid)

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
      </>
   )
}
export default GameInput