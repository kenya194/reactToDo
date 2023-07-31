import Category from "./category";
import { useState, useEffect } from "react";

const Section = () => {

const[yourTodo, setTodo] = useState( () => {
    const todo = localStorage.getItem('inputtedTodo')
    return todo;
});

const inputValue = (e) =>{
    setTodo(e.target.inputValue)
}

useEffect (()=>{
        localStorage.setItem('inputtedTodo', yourTodo);
    }, [yourTodo]);




    return ( 
        <div className="takingInput">
            <h2>Add Todo</h2>
            <form className="todoInput">
                <h4>What is on your mind...</h4>
                <input type='text' id='content' placeholder="eg. Pack up your bags" onChange={inputValue} value={yourTodo}></input> 
            </form>
            <Category />
        </div>
     );
}
 
export default Section;