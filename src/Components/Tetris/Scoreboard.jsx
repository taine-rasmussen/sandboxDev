import React, { useState } from 'react'

const Scoreboard = ({scoreTracker}) => {


   const [playerNameX, setPlayerNameX] = useState('')
   const [playerNameO, setPlayerNameO] = useState('')
   const [input, setInput] = useState('')
   const [input2, setInput2] = useState('')
   const [changeView, setChangeView] = useState(true)



   const handleChange = (e) => {
      e.preventDefault()
      setInput(e.target.value)
      console.log('input test:',input)
   }
   const handleChange2 = (e) => {
      e.preventDefault()
      setInput2(e.target.value)
   }

   const handleSubmit = (e) => {
         e.preventDefault()
         setPlayerNameO(input2)
         setPlayerNameX(input)
         setChangeView(!changeView)
   }
   const handleEdit = () => {
         setChangeView(!changeView)
   }


   return (
      <div className="scoreboard-container">
        <div className="scoreboard-header">
         {changeView == true ? <h1>Set names</h1> : <h1>Scoreboard</h1> }
            <div className="players">
            <form onSubmit={handleSubmit}>
               {
                  changeView == true ?  <div className="input-container"> <input 
                        type="text"
                        placeholder='Player X name...'
                        value={input}
                        onChange={handleChange}
                     />
                     <input 
                        type="text"
                        placeholder='Player O name...'
                        value={input2}
                        onChange={handleChange2}
                     />
                     <button>Set names</button></div> : 
                     <>
                     <div className="scoreboard-score">
                        <h4>{`${playerNameX} - ${scoreTracker.x}`}</h4>
                        <h4 className="ml">{`${playerNameO} - ${scoreTracker.o}`}</h4>
                     </div>
                        <button className="score-btn" onClick={handleEdit}>Edit</button>
                     </>
                  }
               </form> 
            </div>
        </div>
      </div>
   )
}

export default Scoreboard