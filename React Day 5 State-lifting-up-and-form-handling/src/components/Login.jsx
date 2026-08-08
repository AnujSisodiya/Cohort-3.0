import React from "react";

const Login =({setToggle}) =>{

    return(
        <div className="flex flex-col w-90 rounded-xl bg-white p-6 gap-4" >
            <h1>Login</h1>
            <form className="flex flex-col gap-4">
            <input className="p-2 border-2 border-gray-400 rounded" type="email" name="email" placeholder="Email" />
            <input className="p-2 border-2  border-gray-400 rounded" type="password" name="password" placeholder="Password" />
            <button className="p-2 rounded bg-blue-600 text-white">Login</button>
            <p>Don't have an Account? <span onClick={()=>
                setToggle((prev)=> !prev)
            } className="text-blue-600 cursor-pointer">Register here</span></p>
            </form>
        </div>
    );
};

export default Login;