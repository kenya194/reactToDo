import React, { useState, useEffect } from "react";

function Header() {

    const [inputValue, setInput] = useState( () => {
    const storedName = localStorage.getItem('Name')
        return storedName; 
        });
        // The above takes the input saves it and returns it. the state actually does this 
    const nameChange = (event) => {
        setInput(event.target.value);
    };
        // this takes the input while being typed and sets it as the new input.
    useEffect (()=>{
        localStorage.setItem('Name', inputValue);
    }, [inputValue]);
        // the useEffect runs the set item outside the main functions and stores its value 

    return (
        <div className="greetings">
            <h1 className="title">Hello</h1>
            <input 
            type="text"
            id="name"
            placeholder="Name here"
            onChange={nameChange} 
            value={inputValue}
            >
            </input>

        </div>

    );
}

export default Header;