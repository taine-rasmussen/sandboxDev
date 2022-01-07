import React, {useState} from 'react'
import './Gameboard.css'


// Components
import Scoreboard from './Scoreboard'

const Gameboard = () => {

   const [grid, setGrid] = useState([{id: 0, state: false, value: ''}, {id: 1, state: false, value: ''}, {id: 2, state: false, value: ''}, {id: 3, state: false, value: ''}, {id: 4, state: false, value: ''}, {id: 5, state: false, value: ''}, {id: 6, state: false, value: ''}, {id: 7, state: false, value: ''}, {id: 8, state: false, value: ''},])

   const [toggleMove, setToggleMove] = useState(true)
   const [gameState, setGameState] = useState(false)
   const [header, setHeader] = useState('Tic-Tac-Toe')
   const [gameTracker, setGameTracker] = useState(
      [[], [], [],
      [], [], [],
      [], [], []])

   // Checks win conditions across all rows for both players
   const checkForWinRow = () => {
      if (gameTracker[0] === 'X' && gameTracker[1] === 'X' && gameTracker[2] === 'X'){
         return setGameState(true), setHeader('X won this round')
      } else if (gameTracker[0] === 'O' && gameTracker[1] === 'O' && gameTracker[2] === 'O') {
         return setGameState(true), setHeader('O won this round')
      } 
      else if (gameTracker[3] === 'X' && gameTracker[4] === 'X' && gameTracker[5] === 'X'){
        return setGameState(true), setHeader('X won this round')
      } else if (gameTracker[3] === 'O' && gameTracker[4] === 'O' && gameTracker[5] === 'O') {
         return setGameState(true), setHeader('O won this round')
      }
      else if (gameTracker[6] === 'X' && gameTracker[7] === 'X' && gameTracker[8] === 'X'){
        return setGameState(true), setHeader('X won this round')
      } else if (gameTracker[6] === 'O' && gameTracker[7] === 'O' && gameTracker[8] === 'O') {
         return setGameState(true), setHeader('O won this round')
      }
   }
   // Checks win conditions across all cols for both players
   const checkForWinCol = () => {
      if (gameTracker[0] === 'X' && gameTracker[3] === 'X' && gameTracker[6] === 'X'){
        return setGameState(true), setHeader('X won this round')
      } else if (gameTracker[0] === 'O' && gameTracker[3] === 'O' && gameTracker[6] === 'O') {
         return setGameState(true), setHeader('O won this round')
      } 
      else if (gameTracker[1] === 'X' && gameTracker[4] === 'X' && gameTracker[7] === 'X'){
        return setGameState(true), setHeader('X won this round')
      } else if (gameTracker[1] === 'O' && gameTracker[4] === 'O' && gameTracker[7] === 'O') {
         return setGameState(true), setHeader('O won this round')
      }
      else if (gameTracker[2] === 'X' && gameTracker[5] === 'X' && gameTracker[8] === 'X'){
        return setGameState(true), setHeader('X won this round')
      } else if (gameTracker[2] === 'O' && gameTracker[5] === 'O' && gameTracker[8] === 'O') {
         return setGameState(true), setHeader('O won this round')
      }
   }
   // Checks win conditions across all diagonals for both players
   const checkForWinDia = () => {
      if (gameTracker[0] === 'X' && gameTracker[4] === 'X' && gameTracker[8] === 'X'){
        return setGameState(true), setHeader('X won this round')
      } else if (gameTracker[0] === 'O' && gameTracker[4] === 'O' && gameTracker[8] === 'O') {
         return setGameState(true), setHeader('O won this round')
      } 
      else if (gameTracker[2] === 'X' && gameTracker[4] === 'X' && gameTracker[6] === 'X'){
        return setGameState(true), setHeader('X won this round')
      } else if (gameTracker[2] === 'O' && gameTracker[4] === 'O' && gameTracker[6] === 'O') {
         return setGameState(true), setHeader('O won this round')
      }
   }

   
   const checkForDraw = () => {
      let moveCounter = 0
         gameTracker.forEach((cell) => {
            if(cell == 'X' || cell == 'O'){
               moveCounter += 1
            }
         })
         if(moveCounter === 9 && gameState === false){
            setHeader(`It's a draw`)
         } 
   }

   const resetGame = () => {
      setToggleMove(true)
      setGameState(false)
      setHeader('Tic-Tac-Toe')
      setGameTracker(
      [[], [], [],
      [], [], [],
      [], [], []])
      setGrid([{id: 0, state: false, value: ''}, {id: 1, state: false, value: ''}, {id: 2, state: false, value: ''}, {id: 3, state: false, value: ''}, {id: 4, state: false, value: ''}, {id: 5, state: false, value: ''}, {id: 6, state: false, value: ''}, {id: 7, state: false, value: ''}, {id: 8, state: false, value: ''},])
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
         checkForDraw()
         checkForWinRow()
         checkForWinCol()
         checkForWinDia()
        }
     })
   }

   return (
      <div className="tictactoe-container">
         <div className='scoreboard-container'>
            <Scoreboard />
         </div>
         <div className="gameboard-container">
            <h1>{header}</h1>
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
                        width: 115,
                        height: 115,
                     }}
                     onClick={() => handleClick(cell.id)}
                  >{cell.value}</div>
               ))}
            </div>
            <button onClick={resetGame }>Reset</button>
         </div>
      </div>
   )
}

export default Gameboard