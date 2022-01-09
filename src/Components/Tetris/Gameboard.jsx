import React, {useState} from 'react'
import './Gameboard.css'


// Components
import Scoreboard from './Scoreboard'

const Gameboard = () => {

   const [grid, setGrid] = useState([{id: 0, state: false, value: ''}, {id: 1, state: false, value: ''}, {id: 2, state: false, value: ''}, {id: 3, state: false, value: ''}, {id: 4, state: false, value: ''}, {id: 5, state: false, value: ''}, {id: 6, state: false, value: ''}, {id: 7, state: false, value: ''}, {id: 8, state: false, value: ''},])

   const [toggleMove, setToggleMove] = useState(true)
   const [gameState, setGameState] = useState(false)
   const [header, setHeader] = useState('Tic-Tac-Toe')
   const [scoreTracker, setScoreTracker] = useState({x: 0, o: 0})
   const [gameTracker, setGameTracker] = useState(
      [[], [], [],
      [], [], [],
      [], [], []])

   // Checks win conditions across all rows for both players
   const checkForWinRow = () => {
      if (gameTracker[0] === 'X' && gameTracker[1] === 'X' && gameTracker[2] === 'X'){
         return setGameState(true), setHeader('X won this round'), scoreTracker.x++
      } else if (gameTracker[0] === 'O' && gameTracker[1] === 'O' && gameTracker[2] === 'O') {
         return setGameState(true), setHeader('O won this round'), scoreTracker.o++
      } 
      else if (gameTracker[3] === 'X' && gameTracker[4] === 'X' && gameTracker[5] === 'X'){
        return setGameState(true), setHeader('X won this round'), scoreTracker.x++
      } else if (gameTracker[3] === 'O' && gameTracker[4] === 'O' && gameTracker[5] === 'O') {
         return setGameState(true), setHeader('O won this round'),  scoreTracker.o++
      }
      else if (gameTracker[6] === 'X' && gameTracker[7] === 'X' && gameTracker[8] === 'X'){
        return setGameState(true), setHeader('X won this round'), scoreTracker.x++
      } else if (gameTracker[6] === 'O' && gameTracker[7] === 'O' && gameTracker[8] === 'O') {
         return setGameState(true), setHeader('O won this round'),  scoreTracker.o++
      }
   }
   // Checks win conditions across all cols for both players
   const checkForWinCol = () => {
      if (gameTracker[0] === 'X' && gameTracker[3] === 'X' && gameTracker[6] === 'X'){
        return setGameState(true), setHeader('X won this round'), scoreTracker.x++
      } else if (gameTracker[0] === 'O' && gameTracker[3] === 'O' && gameTracker[6] === 'O') {
         return setGameState(true), setHeader('O won this round'),  scoreTracker.o++
      } 
      else if (gameTracker[1] === 'X' && gameTracker[4] === 'X' && gameTracker[7] === 'X'){
        return setGameState(true), setHeader('X won this round'), scoreTracker.x++
      } else if (gameTracker[1] === 'O' && gameTracker[4] === 'O' && gameTracker[7] === 'O') {
         return setGameState(true), setHeader('O won this round'),  scoreTracker.o++
      }
      else if (gameTracker[2] === 'X' && gameTracker[5] === 'X' && gameTracker[8] === 'X'){
        return setGameState(true), setHeader('X won this round'), scoreTracker.x++
      } else if (gameTracker[2] === 'O' && gameTracker[5] === 'O' && gameTracker[8] === 'O') {
         return setGameState(true), setHeader('O won this round'),  scoreTracker.o++
      }
   }
   // Checks win conditions across all diagonals for both players
   const checkForWinDia = () => {
      if (gameTracker[0] === 'X' && gameTracker[4] === 'X' && gameTracker[8] === 'X'){
        return setGameState(true), setHeader('X won this round'), scoreTracker.x++
      } else if (gameTracker[0] === 'O' && gameTracker[4] === 'O' && gameTracker[8] === 'O') {
         return setGameState(true), setHeader('O won this round'),  scoreTracker.o++
      } 
      else if (gameTracker[2] === 'X' && gameTracker[4] === 'X' && gameTracker[6] === 'X'){
        return setGameState(true), setHeader('X won this round'), scoreTracker.x++
      } else if (gameTracker[2] === 'O' && gameTracker[4] === 'O' && gameTracker[6] === 'O') {
         return setGameState(true), setHeader('O won this round'),  scoreTracker.o++
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

      if(gameState == true){
         return;
      } else {
         if(toggleMove == true){
            move = 'X'
         } else {
            move = 'O'
         }
        grid.map((cell) => {
           if(cell.id == id){
              if(cell.value == 'X' || cell.value == 'O'){
                 return;
              } else {
                 setGrid([...grid], cell.value = move)
                 setToggleMove(!toggleMove)
                 gameTracker[id] = move
                 checkForDraw()
                 checkForWinRow()
                 checkForWinCol()
                 checkForWinDia()
              }
           }
        })
      }
   }


   return (
      <div className="tictactoe-container">
         <div className='scoreboard-container'>
            <Scoreboard scoreTracker={scoreTracker}/>
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
                        fontSize: '6rem',
                        border: '3px solid #001F3D',
                        borderRadius: '7px',
                        margin: '0.5rem',
                        width: 100,
                        height: 100,
                        color: '#CCDADA'
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