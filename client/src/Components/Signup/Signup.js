// src/components/Login.js
import React, { useState } from 'react';
import img from "../../images/auth.jpg"
import "../../App.css"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tooglePassword, setTooglePassword] = useState(false);

    const handleLogin = async () => {
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
      const data={email,username,password}
      try{
        const response = await axios.post("http://localhost:5000/signup",data,config)
        window.alert(response.data.msg);
        navigate("/dashboard");
       }
       catch(error){

        window.alert(error.response.data.msg);

       }
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100 login-page">

            <div className='login-container'>

                <div className='login-img'  >

                    <img src={img} alt="" />
                </div>


                <div className="login-form">

                    <h1 className="text-2xl md:text-4xl text-center text-blue-800 uppercase font-bold tracking-wider	 mb-6 text-black">Register</h1>

                    <div className="mb-4">
                        <label htmlFor="username" className=" text-gray-600 text-sm font-medium mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className=" text-gray-600 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className=" text-gray-600 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input

                            type={tooglePassword ? "text" : "password"}
                            id="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className='flex flex-row justify-end' >
                            <IconButton onClick={() => {
                                setTooglePassword(!tooglePassword);
                            }}>
                                <RemoveRedEyeIcon />
                            </IconButton>
                        </div>

                    </div>


                    <button
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
                        onClick={handleLogin}
                    >
                        Sign Up
                    </button>
                    <div className='flex flex-row justify-center mt-3' >
                        <p>Already Have an Account? <span onClick={() => { navigate("/login") }} className='font-medium text-blue-800' style={{
                            cursor: "pointer"
                        }}>Login</span> </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;
