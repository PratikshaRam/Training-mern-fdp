
import onSearch from './SearchBar';
function SearchBar(onSearch) {
    return (    
        <input type="text" placeholder="Search products..."  oncChange={(e)=>onSearch(e.target.value)}/>      

    );
}   
export default SearchBar;