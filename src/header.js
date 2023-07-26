import React, { useState } from "react";

function Header() {

    const [inputValue, setInput] = useState('');
    const nameChange = (event) => {
        setInput(event.target.value);
    };
    localStorage.setItem('Name', inputValue);
    localStorage.getItem('Name')

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