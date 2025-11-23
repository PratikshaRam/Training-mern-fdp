import { useEffect } from "react";
import { useState } from "react";
function ComponentLifecycle() {
    const[name,setName]=useState("");
    const[mobile,setMobile]=useState("");
    useEffect(() => {
        console.log("use Effect Example");
    }, []);
    useEffect(() => {
        console.log("use Effect Example without");
    }, []);
    useEffect(() => {
        console.log("use Effect Example with states");
    }, []);
    return (
        <div>
            <h1>Component Lifecycle Example</h1>
            <input placeholder="enter name" onChange={(e)=>setName(e.target.value)}/>
            <input placeholder="enter mobile" onChange={(e)=>setMobile(e.target.value)} />
        </div>
    );  

}
export default ComponentLifecycle;