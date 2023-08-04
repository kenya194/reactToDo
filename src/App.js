import React, {useState} from 'react';
import './index.css';
import Navbar from "./navbar";
import Header from "./header";
import Section from "./section";
import Lists from './lists';

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (newTodo)=>{
      setTodo(...todos, newTodo);
  }

  return (
  <div className="APP">
    <div className="nav">
    <Navbar />
    </div>

    <div className="head">
    <Header />
    </div>

    <div>
      <Section addTodo={addTodo}/>
    </div>

    <div>
      <Lists todos = {todos}/>
    </div>
  </div>
  );
}

export default App;
