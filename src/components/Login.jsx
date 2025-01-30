import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from "../utils/constants"
const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [error,setError] = useState("");
  const [isLoginForm,setIsLoginForm] = useState(true);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogin = async () =>{
    
  try{const res = await axios.post(BASE_URL + "/login", {
    email,
    password,
  },{
    withCredentials:true,
  });
   dispatch(addUser(res.data));
   return navigate("/");
  }catch(err){
    setError(err?.response?.data || "something went wrong");
    console.error(err); 
  }
  }
  const handleSignUp = async () =>{
    try{
     const res = await axios.post(BASE_URL + "/signup",{firstName,lastName,email,password},{withCredentials:true});
     dispatch(addUser(res.data.data));
     return navigate("/");
    }catch(err){
     setError(err?.response?.data || "Something Went Wrong")
    }
  }
  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-xl ">
  <div className="card-body">
    <h2 className="card-title  justify-center">{isLoginForm ? "Login" : "Sign Up"}</h2>
    <div>
    { !isLoginForm && <><label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text my-5">First Name</span>
  </div>
  <input type="text"
  value = {firstName}
  onChange ={(e)=>setFirstName(e.target.value)}
   placeholder="Type here"
    className="input input-bordered w-full max-w-xs" />
    
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text my-5">Last Name</span>
  </div>
  <input type="text"
  value = {lastName}
  onChange = {(e)=>setLastName(e.target.value)}
  placeholder="Type here" className="input input-bordered w-full max-w-xs" />
</label> </>}
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text my-5">Enter Email</span>
  </div>
  <input type="text"
  value = {email}
  onChange ={(e)=>setEmail(e.target.value)}
   placeholder="Type here"
    className="input input-bordered w-full max-w-xs" />
    
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text my-5">Enter Password</span>
  </div>
  <input type="password"
  value = {password}
  onChange = {(e)=>setPassword(e.target.value)}
  placeholder="Type here" className="input input-bordered w-full max-w-xs" />
</label>
    </div>
    <p className='text-red-500'>{error}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={ isLoginForm ? handleLogin : handleSignUp}>{isLoginForm ? "Login" : "Sign Up"}</button>
    </div>
    <p className='m-auto cursor-pointer py-2' onClick={()=>setIsLoginForm((value)=>!value)}>{isLoginForm ? "New User? Signup Here" : "Exixting User? Login Here"}</p>
  </div>
</div>
    </div>
  )
}

export default Login


