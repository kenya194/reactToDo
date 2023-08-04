import Category from "./category";
import { useState } from "react";

const Section = ({addtodo}) => {

const[yourTodo, setTodo] = useState("");

const handleInputValue = (e) =>{
    setTodo(e.target.value)
}

const handleAddingTodo = () => {
    addtodo(yourTodo);
    setTodo("");
}




    return ( 
        <div className="takingInput">
            <h2>Add Todo</h2>
            <form className="todoInput">
                
                <h4>What is on your mind...</h4>

                <input type='text'
                 id='content'
                  placeholder="eg. Pack up your bags"
                   onChange={handleInputValue} 
                   value={yourTodo}>
                    </input> 
            </form>
            <Category />

            <button onClick={handleAddingTodo}> Add Todo</button>
        </div>
     );
}
 
export default Section;