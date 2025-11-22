import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/headercomponent';
import FooterComponent from './components/FooterComponent';
import NavBar from './components/navbarcomponent';
import ProductCard from './components/ProductCard';
import ProductCardNew from './components/ProductCardNew';
import StateDemo from './components/stateDemo';
import InputDemo from './components/inputDemo';
import ProductInfo from './components/ProductInfo';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <Header />
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
      </div>
    </div>
  );
}

export default App;
