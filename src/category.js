const Category = () => {
    return ( 
        <div>
            <h2>Select a Category</h2>
            <label>
                <input type="radio" id="category1" value='business'></input>
                <span className="bubble Business"></span>
                <div>Business</div>
            </label>



            <label>
                <input type="radio" id="category2" value='personal'></input>
                <span className="bubble Personal"></span>
                <div>Personal</div>
            </label>
        </div>
     );
}
 
export default Category;