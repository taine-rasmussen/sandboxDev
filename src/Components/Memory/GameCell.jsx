import React from 'react'

const GameCell = () => {

   const divStyle = [{
      filled: [{backgroundColor: '#000'}],
      empty: [{backgroundColor: null}]
   }]
   
   let randomNum = Math.floor(Math.random() * 2)

   return (
      <>
         <div 
            className="memory-game-cell" 
            style={divStyle[0].filled[randomNum]}
         ></div>
      </>
   )
}
export default GameCell