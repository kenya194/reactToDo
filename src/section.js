import Category from "./category";
import { useState } from "react";

const Section = ({addTodo}) => {

    const[yourTodo, setTodo] = useState("");
    const submit = (e)=>{
        e.preventDefault()
        addTodo(yourTodo)
    }
    return ( 
        <div className="takingInput">
            <h2>Add Todo</h2>
            <form onSubmit={submit} className="todoInput">
                
                <h4>What is on your mind... </h4>

                <input type='text'
                 id='content'
                  placeholder="eg. Pack up your bags"
                   onChange={(e)=>setTodo(e.target.value)} 
                   value={yourTodo}>
                    </input> 
                 <input type="submit" value= "Add Todo"></input>
            </form>
            {/* <Category /> */}

        </div>
     );
}
 
export default Section;