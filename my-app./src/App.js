import './App.css';
import Header from "./MyComponents/header";
// Here we are not using default export and using const
import Footer from "./MyComponents/Footer";  
import Todos from './MyComponents/Todos';
function App() {
  // adding onDelete arrow function implementing console.g and indicating some functionaing
  const onDelete = (todo) =>{
    console.log("I am on delete of todo", todo);

  }
  // Here I am making Todos as an object
  // I'llmake array of todos
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "you need to go to the mall to get this job done"
    },
    {
      sno: 3,
      title: "Go to the college",
      desc: "you need to go to the college to get this job done"
    }
  ]
  return (
    <>
    {/* passing data from parent component to child components as props.title in header.js */}
    <Header title = "My Todos List" searchBar={false}/>
    {/* passing all the todos here within Todos */}
    {/* paasing the java script object as '{todos}' */}
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
    
  );
}

export default App;
