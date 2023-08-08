import React, {useState} from 'react';
import './index.css';
import Navbar from "./navbar";
import Header from "./header";
import Section from "./section";
import Lists from './lists';

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (newTodo)=>{
    let Todos = todos
    Todos.push(newTodo)
    setTodo(Todos)
  }


  return (
  <div className="APP">
    <div className="nav">
    {/* <Navbar /> */}
    </div>

    <div className="head">
    {/* <Header /> */}
    </div>

    <div>
      <Section addTodo={(todo)=>addTodo(todo)}/>
    </div>

    <div>
      <Lists todos={todos}/>
    </div>
  </div>
  );
}

export default App;
