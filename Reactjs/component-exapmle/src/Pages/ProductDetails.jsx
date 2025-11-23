import React from 'react';
import { useParams } from 'react-router-dom';   
function ProductDetails() {
    const{id,title}=useParams();
    return (
        
        <div>
            <h1>Product Details Page</h1>   
            <h2>Product ID: {id}</h2>
            <h2>Product Title: {title}</h2>


        </div>
    );
}   
export default ProductDetails;