import React from 'react'

const Scoreboard = ({scoreTracker}) => {
   return (
      <div className="scoreboard-container">
         <h3>X: {scoreTracker.x}</h3>
         <h3>O: {scoreTracker.o}</h3>
      </div>
   )
}

export default Scoreboard