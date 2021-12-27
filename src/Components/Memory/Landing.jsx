import React from 'react'

const Landing = ({setPageView}) => {
   return (
      <div className="landing-container">
         <div className='landing-header'>
            <h1>Memory game</h1>
         </div>
         <div className='landing-blurb'>
            <p>
               After clicking start you will be shown a pattern for you to memorise, after 20 seconds the pattern disappears and you are provided with a blank board for you to recreate the pattern shown. When you think you've got it click submit to check your results  
            </p>
         </div>
         <div>
            <button onClick={() => {setPageView(false)}}>Submit!</button>
         </div>

      </div>
   )
}

export default Landing
