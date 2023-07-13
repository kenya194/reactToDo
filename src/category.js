import Lists from "./lists";

const Category = () => {
    return ( 
        <div>
            <h2>Select a Category</h2>

            <div className="options">
            <label className="split">
                <input type="radio" id="category1" value='business'></input>
                <span className="bubble Business"></span>
                <div>Business</div>
            </label>


            <label className="split">
                <input type="radio" id="category2" value='personal'></input>
                <span className="bubble Personal"></span>
                <div>Personal</div>
            </label>
            </div>

            <input type="submit" value='Add Todo'></input>
            <Lists />
        </div>
     );
}
 
export default Category;