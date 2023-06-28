import React from 'react'

const TodoItem = ({todo, onDelete}) => {                             
  return (
    <div>
      {/* java script object */}
      <h4>{todo.title}</h4>
      {/* This todo description would be taken/imported from App.js or parent */}
      <p>{todo.desc}</p>
      {/* also wanted a button for better visuals */}
      {/* Adding 'btn-sm' decreases the size of button */}
      {/* Here we are making onDelete function as an arrow function for calling it with task on onDelete, Here we after */}
      {/* passing the function not calling  */}
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>

    </div>
  )
}

export default TodoItem
