function Header() {

    let username = JSON.parse(localStorage.getItem("nameData"))
    //getting the input value
    let nameInput = document.querySelector("#name")
    nameInput.value = username;
    //letting the username be equal to the input value

    nameInput.addEventListener('change', e => {
        localStorage.setItem("nameData", e.target.value)
        // local storage set the name according to the values inputted.
    })
    
    return (
        <div className="greetings">
            <h1 className="title">Hello</h1>
            <input type="text" id="name" placeholder="Name here" ></input>
        </div>

    );
}

export default Header;