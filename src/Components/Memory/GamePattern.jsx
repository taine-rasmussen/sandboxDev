import React from 'react'

//Components
import GameCell from './GameCell'

const GamePattern = () => {

   return (
      <div className="memory-game-container">
         {Array(9).fill(<GameCell />)}
      </div>
   )
}
export default GamePattern