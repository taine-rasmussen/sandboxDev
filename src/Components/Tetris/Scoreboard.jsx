import React from 'react'

const Scoreboard = ({scoreTracker}) => {
   return (
      <div className="scoreboard-container">
        <div className="scoreboard-header">
            <h1>Scoreboard</h1>
            <div className="players">
               <h4>X</h4>
               <h4>O</h4>
            </div>
        </div>
        <div className="scoreboard-scores-container">
           <div className="scoreboard-score">
               <h5>Rounds won = {scoreTracker.x}</h5>
           </div>
           <div className="scoreboard-score">
               <h5>Rounds won = {scoreTracker.o}</h5>
           </div>
        </div>
      </div>
   )
}

export default Scoreboard