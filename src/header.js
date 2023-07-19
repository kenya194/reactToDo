function Header() {

    let username = localStorage.getItem(" ")
    let nameInput = document.querySelector("#name")
    nameInput.value = username;

    nameInput.addEventListener('change', e => {
        localStorage.setItem('', e.target.value)
    })
    
    return (
        <div className="greetings">
            <h1 className="title">Hello</h1>
            <input type="text" id="name" placeholder="Name here" ></input>
        </div>

    );
}

export default Header;