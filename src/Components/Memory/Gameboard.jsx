import React, { useState, useEffect } from 'react'

// Components
import GameInput from './GameInput'

const Gameboard = () => {

   const [changeView, setChangeView] = useState(false)
   const [changeGrid, setChangeGrid] = useState(false)
   const [emptyGrid, setEmptyGrid] = useState([[], [], [], [], [], [], [], [], []])
   const [gridPattern, setGridPattern] = useState([[Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)]])


   // Updates changeView after 5secs changing the component rendered to GameInput - Creates and displays pattern
   const createPattern = () => {
      setChangeGrid(true)
      setInterval(function () {setChangeView(true)}, 500);
   }

   return(
      <>
      {changeView ? <GameInput gridPattern={gridPattern} emptyGrid={emptyGrid} setGridPattern={setGridPattern}/> : 
         <div className='memory-game-container'>
            {changeGrid ? gridPattern.map((cell, index) => {
               return(
                  <div 
                     className="memory-game-cell"
                     key={index}
                     style={cell != 1 ? {backgroundColor: '#000'} : {backgroundColor: '#fff'}}
                  ></div>
               )
            }) 
            : emptyGrid.map((cell, index) => {
               return(
                  <div 
                     className="memory-game-cell"
                     key={index}
                     style={{backgroundColor: '#fff'}}
                  ></div> 
               )
            })}
         {changeGrid ? null : <button onClick={createPattern}>Create Pattern!</button>}
         </div>
      }  
      </>
   )
}
export default Gameboard
