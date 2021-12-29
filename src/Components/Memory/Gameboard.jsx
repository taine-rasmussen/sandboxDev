import React, { useState } from 'react'

// Components
import GameInput from './GameInput'

const Gameboard = () => {

   const [pattern, setPattern] = useState([])
   const [winningGrid, setWinningGrid] = useState([])
   const [changeView, setChangeView] = useState(false)
   const [changeGrid, setChangeGrid] = useState(false)
   const [emptyGrid, setEmptyGrid] = useState([[], [], [], [], [], [], [], [], []])
   const [gridPattern, setGridPattern] = useState([[Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)]])


   // Takes generated pattern and addeds it to nested array with id's attached
   const sortData = () => {
      gridPattern.forEach((cell, index) => {  
        pattern.push({id: index, pattern: cell, style: {backgroundColor: '#fff'}})
      })
      
      pattern.forEach((cell) => {
         winningGrid.push([cell.pattern[0]])
      })
   }

   // Updates changeView after 5secs changing the component rendered to GameInput - Creates and displays pattern
   const createPattern = () => {
      setChangeGrid(true)
      sortData()
      setInterval(function () {setChangeView(true)}, 1500);
   }

   return(
      <>
      {changeView ? <GameInput pattern={pattern} winningGrid={winningGrid} setChangeGrid={setChangeGrid}/> : 
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
