import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { removeUser } from '../utils/userSlice';
const Navbar = () => {
  const user = useSelector((store)=> store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChangeLogout = async () =>{
   try{
    await axios.post(BASE_URL + "/logout",{},{withCredentials:true})
    dispatch(removeUser());
    return navigate("/login");
   }catch(err){
    console.log(err);
   }
  }
  return (
    <div>
      <div className="navbar bg-base-100 items-center">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">devTinder</Link>
        </div>
        {user &&(<div className="flex gap-2 text-center">
          <div className='text-center'>Welcome,{user.firstName}</div>
          <div className="form-control">
            
          </div>
          <div className="dropdown dropdown-end mx-5 flex ">
            
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Photo"
                  src={user.photoUrl}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to="/connections">Connections</Link></li>
              <li><Link to="/requests">Requests Recieved</Link></li>
              <li><a onClick={handleChangeLogout}>Logout</a></li>
            </ul>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar
