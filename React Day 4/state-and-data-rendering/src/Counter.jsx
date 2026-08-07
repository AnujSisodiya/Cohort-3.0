import React, { useState } from "react";

const Counter = () =>{  
  
    let [count, setCount] = useState(0);
    return (
     <div>
        <h1>Count is {count}</h1>
        <button onClick={()=>{
           setCount(count+1);
        }}>Increase</button>
     </div>
    );
};

export default Counter;