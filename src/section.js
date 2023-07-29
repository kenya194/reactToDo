import Category from "./category";
import { useState } from "react";

const Section = () => {

const[yourTodo, setTodo] = useState("");








    return ( 
        <div className="takingInput">
            <h2>Add Todo</h2>
            <form className="todoInput">
                <h4>What is on your mind...</h4>
                <input type='text' id='content' placeholder="eg. Pack up your bags"></input> 
            </form>
            <Category />
        </div>
     );
}
 
export default Section;