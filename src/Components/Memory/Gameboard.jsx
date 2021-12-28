import React, { useState, useEffect } from 'react'

// Components
import GameInput from './GameInput'

const Gameboard = () => {


   const [changeGrid, setChangeGrid] = useState(false)
   const [emptyGrid, setEmptyGrid] = useState([[], [], [], [], [], [], [], [], []])
   const [gridPattern, setGridPattern] = useState([[Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)], [Math.floor(Math.random() * 2)]])


   // Updates changeView after 5secs changing the component rendered to GameInput
   // setInterval(function () {setChangeView(true)}, 5555000);
  


   // console.log('grid:', grid)

   return(
      <>
         <div className='memory-game-container'>
            {changeGrid ? gridPattern.map((cell, index) => {

               console.log(cell)
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
         </div>
         <button onClick={() => {setChangeGrid(true)}}>create pattern!</button>
      </>
   )
}

export default Gameboard
