import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';
const Connections = () => {
    const connections = useSelector((store)=>store.connections)
    const dispatch = useDispatch();
    const fetchConnections = async () =>{
     try{
    const res = await axios.get(BASE_URL + "/user/connections",{withCredentials:true})
    dispatch(addConnections(res.data.data))
     }
     catch(err){
        console.log(err);
     }
    } 
    useEffect(()=>{
        fetchConnections();
    }, [])
    
    if(!connections){
        return;
    }
    if(connections.length === 0){
        return <h1 className='text text-center'>No Connections</h1>
    }
  return (
    <div className='flex flex-col justify-center my-10 text-center'>
      <h1 className='text-bold text-3xl  '>Connections</h1>
      {connections.map((connection) => {
        const {_id,firstName,lastName,photoUrl,age,gender,about} = connection
        return(
            <div key={_id} className='m-4 p-4 border rounded-lg bg-base-300 flex my-10 justify-center w-1/2 mx-auto'>
            <div>
                <img src={photoUrl} className='w-20 h-20 rounded-full object-fill' alt="photo" /></div>
            <div className='text-left mx-4'>
            <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
            {age&&gender&&<p>{age + " " + gender}</p>}
            <p>{about}</p>
            </div>
        </div>
      )})}
    </div>
  )
}

export default Connections
