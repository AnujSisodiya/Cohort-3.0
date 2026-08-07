import React, { useState } from "react";

const Web =()=>{
    let [formData, setFormData] = useState({
        name : "",
        email : "",
        password : ""
    });


    return(
        <div className="flex flex-col gap-5">
            <input onChange={(e)=>{
              setFormData({ ...formData, name: e.target.value });
            }} className="p-2 border-2 rounded w-60" type="text" placeholder="Name" />
            <input onChange={(e)=>{
                setFormData({ ...formData, email: e.target.value });
            }} className="p-2 border-2 rounded w-60" type="text" name="" placeholder="Email" />
            <input onChange={(e)=>{
                setFormData({ ...formData, password: e.target.value });
            }} className="p-2 border-2 rounded w-60" type="text" name="" placeholder="Password" />
            <button className="p-2 border-2 rounded w-20" >Submit</button>

            <h1>Your name is {formData.name}</h1>
        </div>
    )
}

export default Web;