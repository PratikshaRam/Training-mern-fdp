import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import Filters from './Components/Filters';
import ProductTable from './Components/ProductTable';
import onSearch from './Components/SearchBar';

function App() {
  return (
    
    <div className="App">
      <h1>Product Dashboard</h1>
      <SearchBar onSearch={onSearch}/>
      <Filters/>
      <ProductTable/>
    </div>
  );
}

export default App;
