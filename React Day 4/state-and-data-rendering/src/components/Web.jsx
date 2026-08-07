import React, { useState } from "react";

const Web =()=>{
    let [formData, setFormData] = useState({
        name : "",
        email : "",
        password : ""
    });

  const handleChange = (e) =>{
    let {name ,value} = e.target;
    setFormData({ ...formData, [name]: value });
  }

    return(
        <div className="flex flex-col gap-5">
            <input onChange={
              handleChange
            } className="p-2 border-2 rounded w-60" type="text"name="name" placeholder="Name" />
            <input onChange={
              handleChange
            } className="p-2 border-2 rounded w-60" type="text" name="email" placeholder="Email" />
            <input onChange={
             handleChange
            } className="p-2 border-2 rounded w-60" type="text" name="password" placeholder="Password" />
            <button className="p-2 border-2 rounded w-20" >Submit</button>

            <h1>Your name is {formData.name}</h1>
        </div>
    )
}

export default Web;