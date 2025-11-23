import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './components/headercomponent';
// import FooterComponent from './components/FooterComponent';
// import NavBar from './components/navbarcomponent';
// import ProductCard from './components/ProductCard';
// //import ProductCardNew from './components/ProductCardNew';
// import StateDemo from './components/stateDemo';
// import InputDemo from './components/inputDemo';
// import ProductInfo from './components/ProductInfo';
// import Products from './components/Products';
// import ComponentLifecycle from './components/ComponentLifecycle';
// import Parent from './components/Parent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';        
import About from './Pages/About';  
import ProductsComponents from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/products"}>ProductsComponents</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsComponents />} /> 
        <Route path="/products/:id/:title" element={<ProductDetails />} /> 
      </Routes>

      </BrowserRouter>
      {/* <Header />
      <FooterComponent />
      <NavBar />
      <ProductCard />
      <StateDemo />
      <div className="row">
        <ProductCardNew 
          title="Product 1" 
          description="This is product 1" 
          price="$10" 
          imagePath="https://media.istockphoto.com/id/1452281128/photo/laptop-blank-screen-on-wood-table-with-coffee-cafe-background-mockup-template-for-your-text.jpg?b=1&s=612x612&w=0&k=20&c=od7aSeC5O6A_uvMfeaA1YomESKx9mAwCcGhx4IomubE=" 
        />
        <ProductCardNew 
          title="Product 2" 
          description="This is product 2" 
          price="$20" 
          imagePath="https://media.istockphoto.com/id/1452281128/photo/laptop-blank-screen-on-wood-table-with-coffee-cafe-background-mockup-template-for-your-text.jpg?s=2048x2048&w=is&k=20&c=HPm_zawaBo2cOScJ0mOSxOA-Sy1om2jR1uqfH66-iWs=" 
        />
        <ProductCardNew 
          title="Product 3" 
          description="This is product 3" 
          price="$30" 
          imagePath="https://media.istockphoto.com/id/1452281128/photo/laptop-blank-screen-on-wood-table-with-coffee-cafe-background-mockup-template-for-your-text.jpg?s=2048x2048&w=is&k=20&c=HPm_zawaBo2cOScJ0mOSxOA-Sy1om2jR1uqfH66-iWs=" 
        /> 
        <InputDemo />
        <ProductInfo /> 
        <Products />
        <Parent/>
        <ComponentLifecycle/>
      </div> */}
    </div>
  );
}

export default App;
