// import Lists from "./lists";
import React, {useState} from "react";

const Category = () => {

    const[selectedOption, setOption] = useState('business');

    const handleEvent = (e) => {
            setOption(e.target.value);
    }



    return ( 
        <div>
            <h2 className="category-head">Select a Category</h2>

            <div className="options">
            <label className="split">
                <input type="radio"
                 id="category1" 
                 value='business' 
                 onChange={handleEvent}
                 checked = {selectedOption === 'business'}
                 ></input>
                <span className="bubble Business"></span>
                <div>Business</div>
            </label>


            <label className="split">
                <input type="radio"
                 id="category2" 
                 value='personal'
                 onChange={handleEvent}
                 checked = {selectedOption === 'personal'}
                ></input>
                <span className="bubble Personal"></span>
                <div>Personal</div>
            </label>
            </div>

            {/* <input type="submit" value='Add Todo'></input> */}
            
        </div>
     );
}
 
export default Category;