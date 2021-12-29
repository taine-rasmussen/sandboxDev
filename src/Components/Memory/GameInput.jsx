import React, {useState} from 'react'

const GameInput = ({pattern}) => {


   const [gameHeader, setGameHeader] = useState('')

   // Checks if cell was part of pattern and changes bg if true else triggers gameover header to appear
   const handleClick = (id) => { 
     if(document.getElementById(`${id}`) && pattern[id].pattern == 0){
      document.getElementById(`${id}`).style.background = '#000'
     }
     else {
        setGameHeader('Game over')
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
      </>
   )
}
export default GameInput