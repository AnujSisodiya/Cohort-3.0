import React, { useState } from "react";

const Register =({setToggle ,setUsers}) =>{
    let [formData,setFormData] = useState({});
    

    const handleChange = (e) =>{
        let {name,value} = e.target;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUsers((prev)=>[...prev,formData]);
        setFormData({
            name:"",
            email:"",
            password:"",
            image:""

        })
    }

    return(
        <div className="flex flex-col w-90 rounded-xl bg-white p-6 gap-4" >
            <h1>Register</h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input value={formData.name} onChange={handleChange} className="p-2 border-2 border-gray-400 rounded" type="text" name="name" placeholder="Name" />    
            <input value={formData.email} onChange={handleChange} className="p-2 border-2 border-gray-400 rounded" type="email" name="email" placeholder="Email" />
            <input value={formData.password} onChange={handleChange} className="p-2 border-2  border-gray-400 rounded" type="password" name="password" placeholder="Password" />
            <input value={formData.image} onChange={handleChange} className="p-2 border-2 border-gray-400 rounded" type="text" name="image" placeholder="Image Url" />
            <button className="p-2 rounded bg-blue-600 text-white">Register</button>
            <p>Already have an Account? <span onClick={()=>
                setToggle((prev)=> !prev)} className="text-blue-600 cursor-pointer">Login here</span></p>
            </form>
        </div>
    );
};

export default Register;