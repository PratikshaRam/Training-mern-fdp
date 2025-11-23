import React from 'react';
import { useEffect } from "react";
import { useState } from "react";   
import ChildDisplay from './ChildDisplay';
import ChildButton from './ChildButton';
function Parent() {
const[count,setCount]=useState(0);
  return (
    <div>
      <h2>This is Parent Component</h2>
      <ChildDisplay count={count}/>
      <ChildButton 
      increase={()=> setCount(count+1)}
      decrease={()=> setCount(count-1)}/>
    </div>
  );
}
export default Parent;