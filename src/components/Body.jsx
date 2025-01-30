import React, { useEffect } from 'react'

import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Body = () => { 
  const dispatch = useDispatch();
  const fetchUser = async () =>{
  try{
    const res = await axios.get(BASE_URL + "/profile/view",{withCredentials:true});
    dispatch(addUser(res.data));
  }
  catch(err){
    console.log(err);
  }
};
useEffect(()=>{
 fetchUser();
},[])
  return (
    <div>
      <Navbar/>
      <Outlet/>
      
      
    </div>
  )
}

export default Body

