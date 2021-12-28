import React, { useState } from 'react'

// Components
import GamePattern from './GamePattern'
import GameInput from './GameInput'

const Gameboard = () => {


   const [changeView, setChangeView] = useState(false)

   // Updates changeView after 5secs changing the component rendered to GameInput
   setInterval(function () {setChangeView(true)}, 5000);

   return(
      <>
         {changeView ? <GameInput /> : <GamePattern />}
      </>
   )
}

export default Gameboard