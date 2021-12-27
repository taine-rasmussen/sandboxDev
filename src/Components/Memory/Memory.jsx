import React, { useState } from 'react';
import './Memory.css'

import Gameboard from './Gameboard'
import Landing from './Landing'

const Memory = () => {

   const [pageView, setPageView] = useState(true)

   return (
   <div className="memory-container">
      {pageView ? <Landing setPageView={setPageView}/> : <Gameboard /> }
   </div>

   )

}

export default Memory;