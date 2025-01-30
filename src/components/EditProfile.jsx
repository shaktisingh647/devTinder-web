// import { useState } from "react";
// import UserCard from "./UserCard";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";


// const EditProfile = ({ user }) => {
//   const [firstName, setFirstName] = useState(user?.firstName || ""); 
//   const [lastName, setLastName] = useState(user?.lastName || "");
//   const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
//   const [age, setAge] = useState(user?.age || "");
//   const [gender, setGender] = useState(user?.gender || "");
//   const [about, setAbout] = useState(user?.about || "");
//   const [error,setError] = useState("")
//   const dispatch = useDispatch();
//   const [showToast, setShowToast] = useState(false);

//   const saveProfile = async () => {

//       setError("");
//       try {
//           const res = await axios.patch(
//               BASE_URL + "/profile/edit",
//               {
//                   firstName,
//                   lastName,
//                   photoUrl,
//                   age,
//                   gender,
//                   about
//               },
//               { withCredentials: true }
//           );
//           dispatch(addUser(res?.data?.data));
//           setShowToast(true);
//           setTimeout(() => {
//               setShowToast(false);
//           }, 3000);
//       } catch (err) {
//           setError(err.response.data);
//       }
//   };

  
//   return ( <>
//       <div className="flex justify-center my-10">
//         <div className="flex justify-center mx-10">
//           <div className="card bg-base-300 w-96 shadow-xl">
//             <div className="card-body">
//               <h2 className="card-title justify-center">Edit Profile</h2>
//               <div>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">First Name</span>
//                   </div>
//                   <input 
//                   type="text"
//                   value={firstName}
//                   placeholder="First Name"
//                   className="input input-bordered w-full max-w-xs"
//                   onChange={(e)=>setFirstName(e.target.value)}
//                   />
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Last Name</span>
//                   </div>
//                   <input 
//                   type="text"
//                   value={lastName}
//                   placeholder="Last Name"
//                   className="input input-bordered w-full max-w-xs"
//                   onChange={(e)=>setLastName(e.target.value)}
//                   />
//                 </label>
//                 <div className="label">
//                     <span className="label-text">Photo Url</span>
//                 </div>
//                 <input
//                  type="text"
//                  placeholder="Photo Url"
//                  value={photoUrl}
//                  className="input input-bordered w-full max-w-xs"
//                  onChange={(e)=>setPhotoUrl(e.target.value)} />
//                  </label>
//                  <label className="form-control w-full max-w-xs my-2" >
//                   <div className="label">
//                     <span className="label-text" placeholder="Age">Age</span>
//                   </div>

//                   <input
//                    type="text"
//                    value={age}
//                    placeholder="Age"
//                    className="input input-bordered w-full max-w-xs"
//                    onChange={(e)=>setAge(e.target.value)}
//                     />
//                  </label>
//                  <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                    <span className="label-text">Gender</span>
//                   </div>
//                   <input
//                    type="text"
//                    value={gender}
//                    placeholder="Gender"
//                    className="input input-bordered w-full max-w-xs"
//                    onChange={(e)=>setGender(e.target.value)}
//                     />
//                  </label>
//                  <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                      <span className="label-text">About</span>
//                   </div>
//                   <input
//                    type="text"
//                    value={about}
//                    placeholder="About"
//                    className="input input-bordered w-full max-w-xs"
//                    onChange={(e)=>setAbout(e.target.value)}
//                     />
//                  </label>
//               </div>
//               <p className="text-red-500">{error}</p>
//               <div className="card-actions justify-center m-2">
//                 <button className="btn btn-primary" onClick={saveProfile}>
//                   Save Profile
//                   </button>
//               </div>
//             </div>
//             <p className="text-red-500">{error}</p>

//           </div>
//         </div>
//          <UserCard
//          user={{firstName,lastName,photoUrl,age,gender,about}}
//          />
//       </div>
//       {showToast &&
//        (<div className="toast toast-top toast-center">
//         <div className="alert alert-success">
//           <span>Profile Saved Successfully</span>
//         </div>
//       </div>)}</>
//   );
// }; 

// export default EditProfile









import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [about, setAbout] = useState(user?.about || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center my-10 gap-10">
        {/* Edit Profile Form */}
        <div className="card bg-base-300 w-full md:w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div className="space-y-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  placeholder="First Name"
                  className="input input-bordered w-full"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  value={lastName}
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="text"
                  value={photoUrl}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Age</span>
                </div>
                <input
                  type="text"
                  value={age}
                  placeholder="Age"
                  className="input input-bordered w-full"
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Gender</span>
                </div>
                <input
                  type="text"
                  value={gender}
                  placeholder="Gender"
                  className="input input-bordered w-full"
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">About</span>
                </div>
                <textarea
                  value={about}
                  placeholder="About"
                  className="textarea textarea-bordered w-full"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-primary" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>

        {/* UserCard Preview */}
        <div className="w-full md:w-96">
          <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Saved Successfully</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
