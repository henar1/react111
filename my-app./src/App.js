import './App.css';
import Header from "./MyComponents/header";
// Here we are not using default export and using const
import Footer from "./MyComponents/Footer";  
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
// Here we are using Use state hooks for deleteing the single Element
import React, { useState, useEffect } from 'react';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo =[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  // adding onDelete arrow function implementing console.g and indicating some functionaing
  const onDelete = (todo) =>{
    console.log("I am on delete of todo", todo);
    // filter() is a higher order array method
    setTodos(todos.filter((e)=>{

      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  // Here I am making Todos as an object
  // I'llmake array of todos
  // setTodos is function that will update the todos

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno;
    // When todos are undefined, or no todo is there
    if(todos.length==0){
      sno = 0;
  }
    else{
      sno = todos[todos.length-1]. sno+1 ;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    
     
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
    {/* passing data from parent component to child components as props.title in header.js */}
    <Header title = "My Todos List" searchBar={false}/>
    <AddTodo addtodo={addTodo}/>
    {/* passing all the todos here within Todos */}
    {/* paasing the java script object as '{todos}' */}
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
    
  );
}

export default App;
