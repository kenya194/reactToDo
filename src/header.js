import React, { useState } from "react";

function Header() {

    const [input, setInput] = useState('');
    const nameChange = e => {
        setInput(e.target.value);
    }

    
    return (
        <div className="greetings">
            <h1 className="title">Hello</h1>
            <input type="text" id="name" placeholder="Name here" value={input} onChange={nameChange}></input>
        </div>

    );
}

export default Header;