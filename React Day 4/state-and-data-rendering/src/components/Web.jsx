import React, { useState } from "react";

const Web =()=>{
     let [name, setName] = useState("");
     let [password, setPassword] = useState("");
     let [email, setEmail] = useState("");
    return(
        <div className="flex flex-col gap-5">
            <input onChange={(e)=>{
              setName(e.target.value);
            }} className="p-2 border-2 rounded w-60" type="text"placeholder="Name" />
            <input onChange={(e)=>{
                setEmail(e.target.value);
            }} className="p-2 border-2 rounded w-60" type="text" name="" placeholder="Email" />
            <input onChange={(e)=>{
                setPassword(e.target.value);
            }} className="p-2 border-2 rounded w-60" type="text" name="" placeholder="Password" />
            <button className="p-2 border-2 rounded w-20" >Submit</button>

            <h1>Name is {name}</h1>
            <h1>Email is {email}</h1>
            <h1>Password is {password}</h1>
        </div>
    )
}

export default Web;