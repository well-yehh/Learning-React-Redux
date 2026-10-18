import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import './App.css';
import TodoItems from "./Components/TodoItems";

function App() {

  const todoItems = [{
    name:'Buy Milk',
    date:'4/10/2023',
  },
  {
    name:'Go to college',
    date:'4/10/2023',
  },
  {
    name:'Like and follow',
    date:'4/10/2023',
  }]

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems = {todoItems}></TodoItems>
      
    </center>
  );
}
export default App;

