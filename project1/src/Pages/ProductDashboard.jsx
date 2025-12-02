import SearchBar from "../Components/SearchBar";

function ProductDashboard() {
    return (
        <div>
            <h1>Product Dashboard</h1>
            <SearchBar onSearch={onSearch}/>
        </div>
    );
}   
export default ProductDashboard;