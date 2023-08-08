import { useEffect, useState } from "react";


const Lists = ({todos}) => {
    const [allTodos, setAllTodos] = useState([])
    useEffect(()=>{
        console.log(todos)
        setAllTodos([...todos])
    }, [todos])

    return ( 

        <div className="list-items">

            <h2>Your Added Todos</h2> 

        <ul>
            {
                todos.map((todo, index)=><li key={index}>{todo}</li>)
            }
        </ul>
        </div>
     );
}
 
export default Lists;