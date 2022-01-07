import React, {useState} from 'react'
import './Gameboard.css'

const Gameboard = () => {

   const [grid, setGrid] = useState([{id: 1, state: false, value: ''}, {id: 2, state: false, value: ''}, {id: 3, state: false, value: ''}, {id: 4, state: false, value: ''}, {id: 5, state: false, value: ''}, {id: 6, state: false, value: ''}, {id: 7, state: false, value: ''}, {id: 8, state: false, value: ''}, {id: 9, state: false, value: ''},])

   const [toggleMove, setToggleMove] = useState(true)

   // updates player move toggle changing value set "X" or "O" and updates gird with new move
   const handleClick = (id) => {
      let move = ''
      if(toggleMove == true){
         move = 'X'
      } else {
         move = 'O'
      }
     grid.map((cell) => {
        if(cell.id == id){
           setGrid([...grid], cell.value = move)
           setToggleMove(!toggleMove)
        }
        return grid
     })
     return grid
   }

   const checkForWin = () => {
      
   }


   return (
      <div className="gameboard-container">
         <div className="gameboard-area">
            {grid.map((cell) => (
               <div 
                  key={cell.id}
                  className="gameboard-cell"
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     fontSize: '7rem',
                     border: '1px solid #000',
                     width: 150,
                     height: 150,
                  }}
                  onClick={() => handleClick(cell.id)}
               >{cell.value}</div>
            ))}
         </div>
      </div>
   )
}

export default Gameboard