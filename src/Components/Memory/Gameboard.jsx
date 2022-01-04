import React, { useState } from 'react'


// Components
import GameInput from './GameInput'

// Strech idea: Before player has selected create pattern the grid should randomly change colour of cell backgrounds until create pattern is selected.

const Gameboard = () => {

   const [pattern, setPattern] = useState([])
   const [winningGrid, setWinningGrid] = useState([])
   const [changeView, setChangeView] = useState(false)
   const [changeGrid, setChangeGrid] = useState(false)
   const [emptyGrid, setEmptyGrid] = useState([[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []])
   const [gridPattern, setGridPattern] = useState([[Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)],[Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)]])


   
   
   // Takes generated pattern and addeds it to nested array with id's attached
   const sortData = () => {
      gridPattern.forEach((cell, index) => {  
         pattern.push({id: index, pattern: cell, style: {backgroundColor: '#A6CF98'}})
      })
      
      pattern.forEach((cell) => {
         winningGrid.push([cell.pattern[0]])
      })
   }



   
   // Updates changeView after 5secs changing the component rendered to GameInput - Creates and displays pattern
   const createPattern = () => {
      setChangeGrid(true)
      sortData()
   }
   
   // Resets the game???
   const resetGame = () => {
      setPattern([])
      setWinningGrid([])
      setChangeView(!changeView)
      setChangeGrid(!changeGrid)
      setGridPattern([[Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)],[Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)]])
   }
   
   const attemptPatternBtn = <button onClick={() => {setChangeView(!changeView)}}>Attempt pattern</button>
   const createPatternBtn = <button onClick={createPattern}>Create Pattern!</button>

   return(
      <>
      {changeView ? <GameInput pattern={pattern} winningGrid={winningGrid} resetGame={resetGame}/> : 
         <div className='memory-game-container'>
            {changeGrid ? gridPattern.map((cell, index) => {
               return(
                  <>
                  <div 
                     className="memory-game-cell"
                     key={index}
                     style={cell != 1 ? {backgroundColor: '#DB6B97'} : {backgroundColor: '#A6CF98'}}
                  ></div>

                  </>
               )
            }) 
            : emptyGrid.map((cell, index) => {
               return(
                  <div 
                     className="memory-game-cell empty-hover"
                     key={index}
                     style={{backgroundColor: '#A6CF98'}}
                  ></div> 
               )
            })}
         {changeGrid ? attemptPatternBtn: createPatternBtn}             
         </div>
      }  
      </>
   )
}
export default Gameboard
