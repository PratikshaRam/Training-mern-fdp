import React, { useState } from 'react';
function ProductInfo() {
    const [product, setProduct] = useState({ Name: "Laptop", Price: 50000 });

    return (
        <div>
            <h1>Product Info Component</h1>
            <h2>Product Name: {product.Name}</h2>
            <h2>Product Price: {product.Price}</h2>
            <button onClick={()=>setProduct({...product,Price:7888})}>change price</button>
        </div>
    );
}
export default ProductInfo;