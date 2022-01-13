import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {

   
   const [todos, setTodos] = useState([{id: 0, value: 'example'}])
   
   return (
      <div className="todo-container">
         <div className="todo-card-container">
            <div className="todo-tasks">
               {todos.map((task) => {

                  console.log(task)
                  return(
                     <div className="todo-single-task">
                        <h3>{task.value}</h3>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
export default Todo