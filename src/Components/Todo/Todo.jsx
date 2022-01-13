import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {

   
   const [todos, setTodos] = useState([])
   const [input, setInput] = useState('')


   // udpates state with input text
   const handleChange = (e) => {
      e.preventDefault()
      setInput(e.target.value)
   }

   // handles form submit when adding new tasks
   const handleSubmit = () => {
      todos.push({id: todos.length, value: input})
      setInput('')
   }

   const handleDelete = (id) => {
      const newList = todos.filter((task) => task.id !== id)
      setTodos(newList)
   }
   
   return (
      <div className="todo-container">
         <h1>Todo!</h1>
         <div className="todo-card-container">
            <div className="todo-input-container">
               <form onSubmit={handleSubmit}>
                  <input 
                     type='text'
                     placeholder='Add new task...'
                     onChange={handleChange}
                     value={input}
                  />
                  <button>Add task</button>
               </form>
            </div>
            <div className="todo-tasks">
               {todos.map((task) => {
                  return(
                     <div className="todo-single-task" key={task.id}>
                        <h3>{task.value}</h3>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
export default Todo