import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests, removeRequest } from '../utils/requestSlice';
import axios from 'axios';
const Request = () => {
    const requests = useSelector((store)=>store.requests)
    const dispatch = useDispatch()

    const [showButtons,setShowButtons] = useState(true)
    const reviewRequest = async (status,_id) =>{
      try{
        const res = await  axios.post(BASE_URL + "/request/review/" + status + "/" + _id,{},{withCredentials:true}
        )
        dispatch(removeRequest(_id));
      }catch(err){
        console.log(err);
      }
    }
    const fetchRequest = async () =>{
        try{
         const res = await axios.get(BASE_URL + "/user/request/received", {withCredentials:true});
         dispatch(addRequests(res.data.data))
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
    fetchRequest()
    }, [])
    if(!requests){
      return;
  }
  if(requests.length === 0){
      return <h1 className='flex justify-center my-10'>No Requests Found</h1>
  }
return (
  <div className='flex flex-col justify-center my-10 text-center'>
    <h1 className='text-bold text-3xl  '>Connection Requests</h1>
    {requests.map((request) => {
      const {_id,firstName,lastName,photoUrl,age,gender,about} = request.fromUserId;
      return(
          <div key={_id} className='m-4 p-4 border rounded-lg bg-base-300 flex my-10 justify-center w-1/2 mx-auto'>
          <div>
              <img src={photoUrl} className='w-20 h-20 rounded-full' alt="photo" /></div>
          <div className='text-left mx-4'>
          <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
          {age&&gender&&<p>{age + " " + gender}</p>}
          <p>{about}</p>
          </div>
          <div >
            <button className='btn btn-primary m-5' onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
            <button className='btn btn-secondary' onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>
          </div>
      </div>
    )})}
  </div>
)
}

export default Request
