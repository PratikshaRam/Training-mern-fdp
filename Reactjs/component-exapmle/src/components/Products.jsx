import React, { useState } from 'react';
function Products() {
const[products,setProducts]=useState([{name:"Laptop",price:50000},
{name:"Mobile",price:20000},
{name:"Tablet",price:30000}]);      

return (<div>
    
        <h1>Product List</h1>
        {products.map((value,index)=><div key={index}>
            <h2>{value.name}</h2>
            <h2>{value.price}</h2>  
        </div>)
    }
    </div>
);
}
export default Products;