function Filters(onCategoryChange) {
    return (
        <select onChange={(e)=> onCategoryChange(e.target.value)}>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
        </select>
    );
}   
export default Filters;