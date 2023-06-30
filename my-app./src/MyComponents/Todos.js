import React from 'react'
import TodoItem from "./TodoItem";
// import TodoItem from "./TodoItem"; (we can also import like this for direct interpretation)

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {/* For displaying 'Todos List' in center we are using className="text-center" */}
      {/* For margin and padding lassName="text-center my-3" */}
      {/* Using for loops for displaying all the Todos one by one(rendering) */}
      {/* also use javascript higher order method */}
      {/* Once all todos list deleted then there should be "No Todos to display" should be display */}
      {/* {props.todos} */}
      {/* map()function is an higher order fuction that will return an array, this will also consit of arrow funtion */}
      {/* if we want to add any h3/headings or paragraph then we need to enclose it with wrap arround brackets and 
      add () brackets after return and enclose at the end for adding multiple tags */}
      {/* {onDelete} is a method */}
      {/* If we are redering and method in UI via map() method we need to paas unique Key */}
      {props.todos.length==0? "No Todos to display":
      
      props.todos.map((todo)=>{
        return (
          <>
        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
        </>
        )
        
      })
    }
      
    </div>
  )
}

export default Todos
