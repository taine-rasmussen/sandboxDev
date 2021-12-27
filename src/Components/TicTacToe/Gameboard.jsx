import React, {useState} from 'react'
import './Gameboard.css'



const Gameboard = () => {

 
   const [playerMove, setPlayerMove] = useState('')

   const setMove = () => {
      setPlayerMove('X')
   }


   return (
      <div className="gameboard-container">
         <div className="gameboard-area">
            <div className="gameboard-cell" onClick={setMove}>{playerMove}</div>
            <div className="gameboard-cell" onClick={setMove}>{playerMove}</div>
            <div className="gameboard-cell" onClick={setMove}>{playerMove}</div>
            <div className="gameboard-cell" onClick={setMove}>{playerMove}</div>
            <div className="gameboard-cell" onClick={setMove}>{playerMove}</div>
            <div className="gameboard-cell" onClick={setMove}>{playerMove}</div>
            <div className="gameboard-cell" onClick={setMove}>{playerMove}</div>
            <div className="gameboard-cell" onClick={setMove}>{playerMove}</div>
            <div className="gameboard-cell" onClick={setMove}>{playerMove}</div>    
         </div>
      </div>
   )
}

export default Gameboard
