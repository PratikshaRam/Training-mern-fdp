import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import Filters from './Components/Filters';
import ProductTable from './Components/ProductTable';
import onsearch from './Components/SearchBar';

function App() {
  return (
    
    <div className="App">
      <h1>Product Dashboard</h1>
      <SearchBar/>
      <Filters/>
      <ProductTable/>
    </div>
  );
}

export default App;
