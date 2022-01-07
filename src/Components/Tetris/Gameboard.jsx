import React, {useState} from 'react'
import './Gameboard.css'

const Gameboard = () => {

   const [grid, setGrid] = useState([{id: 1, state: false}, {id: 2, state: false}, {id: 3, state: false}, {id: 4, state: false}, {id: 5, state: false}, {id: 6, state: false}, {id: 7, state: false}, {id: 8, state: false}, {id: 9, state: false},])



   return (
      <div className="gameboard-container">
         <div className="gameboard-area">
            {grid.map((cell) => (
               <div 
                  key={cell.id}
                  className="gameboard-cell"
                  style={{
                     border: '1px solid #000',
                     width: 150,
                     height: 150,
                  }}
               />
            ))}
         </div>
      </div>
   )
}

export default Gameboard