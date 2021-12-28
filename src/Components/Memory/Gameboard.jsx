import React from 'react'

// Components
import GamePattern from './GamePattern'

const Gameboard = () => {

   // onClick function that updates selected cells bg colour
   // const updateCell = (id) => {
   //    cells.forEach((cell) => {
   //       if(id === cell.id){
   //          cell.bgColour = cellStyleTrue
   //       }
   //    })
   //    console.log('cell status:', cells)
   // }

 // Create another component that will appear first with the pattern the remeber
 // This component does not need and click to change functionaality 
 // Just needs to generate a random pattern of colours
 // Find EDA kalidaccsope code for example generating n number of divs

   

   return(
      <>
            <GamePattern />
      </>
   )
}

export default Gameboard


