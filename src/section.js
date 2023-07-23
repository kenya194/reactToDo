import Category from "./category";

const Section = () => {

    let todoInfo = localStorage.getItem(" ");
    let todoInput = document.querySelector("#content")
    todoInput.value = todoInfo;

    todoInput.addEventListener('change', e => {
        localStorage.setItem(' ', e.target.value )
    })



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