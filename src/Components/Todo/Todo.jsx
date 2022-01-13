import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {

   
   const [todos, setTodos] = useState([])
   const [input, setInput] = useState('')
   const [editInput, setEditInput] = useState('')
   const [editView, setEditView] = useState(false)


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

   const editChange = (e) => {
           e.preventDefault()
         setEditInput(e.target.value)
   }

   function handleEdit(id){
      todos.map((task) => {
         if(id == task.id){
            return task.value = editInput
         }
      })
      setEditView(!editView)
      setEditInput('')
   }

   // Creats & updates start with new array without including task selected 
   const handleDelete = (id) => {
      const newList = todos.filter((task) => task.id !== id)
      setTodos(newList)
   }

   function handleEditViewChange () {
      setEditView(!editView)
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
                        {editView ? <>
                           <button onClick={() => handleEdit(task.id)}>Add task</button>
                           <input 
                              type='text'
                              onChange={editChange}
                              value={editInput}
                           /> 
                           </> : <> 
                              <button onClick={handleEditViewChange}>Edit</button> 
                              <button onClick={() => handleDelete(task.id)}>Delete</button>
                             </>}
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
export default Todo