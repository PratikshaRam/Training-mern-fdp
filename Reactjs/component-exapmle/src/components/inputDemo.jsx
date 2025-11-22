import React, { useState } from "react";
function InputDemo() {
    const[name,setName] = useState("")
    return (
        <div>
            <input  placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} />
            <h2>Name::{name}</h2>
        </div>
    );
}           
export default InputDemo;