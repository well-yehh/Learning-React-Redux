import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import './App.css';

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="todo-container-items">
        <AddTodo />
        <TodoItem1/>
        <TodoItem2/>
      </div>
      
    </center>
  );
}
export default App;

