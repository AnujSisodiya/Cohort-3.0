import React from "react";

const Usercard = ({user})=>{

    return (
        <div className="p-4 border-gray-400 flex flex-col gap-4  bg-white rounded-xl">
            <div className="w-50 h-50 bg-white p-2 overflow-hidden ">
            <img className="h-full w-full rounded" src={user.image} alt="" /></div>
           <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            </div>
            <button className="p-2 rounded bg-blue-600 text-white">Delete</button>
        </div>
    );
};

export default Usercard;