import React from "react"
import {useState} from "react";

const App = ()=>{

   let [count , setCount] = useState(0);
   let [user , setUser] = useState({name:"Manav"});

  return(
    <div>
      <h1>Count is {count}</h1>
      <h1>Name is {user.name}</h1>
      <button onClick={()=> setCount(count+1)} className="p-2 border-2 rounded bg-red-500">Increment</button>
      <button onClick={()=>{
        user.name = "Anuj"
      }} className="p-2 border-2 rounded bg-emerald-500">Change Name</button>
    </div>
  );
};

export default App;