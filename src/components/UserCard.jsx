import React from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFeed } from '../utils/feedSlice';
import axios from 'axios';
const UserCard = ({user}) => {
    const {_id,firstName,lastName,photoUrl,gender,about,skills,age} = user;
    const dispatch = useDispatch();
    const handleSendRequest = async (status,userId) =>{
        try{
            const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId,{},{withCredentials:true})
            dispatch(removeUserFeed(userId))
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>
      <div className="card bg-base-400 w-96 shadow-xl">
  <figure>
    <img
      src={user.photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {age && gender && <p>{age + ", " + gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center my-4">
    <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
