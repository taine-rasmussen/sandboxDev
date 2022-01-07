import React, {useState} from 'react'
import './Gameboard.css'

const Gameboard = () => {

   const [grid, setGrid] = useState([{id: 0, state: false, value: ''}, {id: 1, state: false, value: ''}, {id: 2, state: false, value: ''}, {id: 3, state: false, value: ''}, {id: 4, state: false, value: ''}, {id: 5, state: false, value: ''}, {id: 6, state: false, value: ''}, {id: 7, state: false, value: ''}, {id: 8, state: false, value: ''},])

   const [toggleMove, setToggleMove] = useState(true)
   const [gameTracker, setGameTracker] = useState(
      [[], [], [],
      [], [], [],
      [], [], []],)

   // Checks win conditions across all rows for both players
   const checkForWinRow = () => {
      if (gameTracker[0] === 'X' && gameTracker[1] === 'X' && gameTracker[2] === 'X'){
         console.log('X won')
      } else if (gameTracker[0] === 'O' && gameTracker[1] === 'O' && gameTracker[2] === 'O') {
         console.log('O won')
      } 
      else if (gameTracker[3] === 'X' && gameTracker[4] === 'X' && gameTracker[5] === 'X'){
         console.log('X won')
      } else if (gameTracker[3] === 'O' && gameTracker[4] === 'O' && gameTracker[5] === 'O') {
         console.log('O won')
      }
      else if (gameTracker[6] === 'X' && gameTracker[7] === 'X' && gameTracker[8] === 'X'){
         console.log('X won')
      } else if (gameTracker[6] === 'O' && gameTracker[7] === 'O' && gameTracker[8] === 'O') {
         console.log('O won')
      }
   }
   // Checks win conditions across all cols for both players
   const checkForWinCol = () => {
      if (gameTracker[0] === 'X' && gameTracker[3] === 'X' && gameTracker[6] === 'X'){
         console.log('X won')
      } else if (gameTracker[0] === 'O' && gameTracker[3] === 'O' && gameTracker[6] === 'O') {
         console.log('O won')
      } 
      else if (gameTracker[1] === 'X' && gameTracker[4] === 'X' && gameTracker[7] === 'X'){
         console.log('X won')
      } else if (gameTracker[1] === 'O' && gameTracker[4] === 'O' && gameTracker[7] === 'O') {
         console.log('O won')
      }
      else if (gameTracker[2] === 'X' && gameTracker[5] === 'X' && gameTracker[8] === 'X'){
         console.log('X won')
      } else if (gameTracker[2] === 'O' && gameTracker[5] === 'O' && gameTracker[8] === 'O') {
         console.log('O won')
      }
   }
   // Checks win conditions across all diagonals for both players
   const checkForWinDia = () => {
      if (gameTracker[0] === 'X' && gameTracker[4] === 'X' && gameTracker[8] === 'X'){
         console.log('X won')
      } else if (gameTracker[0] === 'O' && gameTracker[4] === 'O' && gameTracker[8] === 'O') {
         console.log('O won')
      } 
      else if (gameTracker[2] === 'X' && gameTracker[4] === 'X' && gameTracker[6] === 'X'){
         console.log('X won')
      } else if (gameTracker[2] === 'O' && gameTracker[4] === 'O' && gameTracker[6] === 'O') {
         console.log('O won')
      }
   }


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
         gameTracker[id] = move
         checkForWinRow()
         checkForWinCol()
         checkForWinDia()
        }
     })
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