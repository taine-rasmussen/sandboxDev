import React from 'react'

const GameInput = ({pattern}) => {

   return (
      <div>
         GameInput is working
      </div>
   )
}
export default GameInput


// For game to work this component needs to know the shape of the pattern created in GamePattern - problem is that the info I need is in that component so I can't pass it back to this component to check. I need to move some info to the parent component so I can pass some things down