

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { BASE_URL } from '../utils/constants';
// import { addFeed } from '../utils/feedSlice';
// import axios from 'axios';
// import UserCard from './UserCard';

// const Feed = () => {
//   const feed = useSelector((store) => store.feed);
//   const dispatch = useDispatch();

//   const getFeed = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true });
//       dispatch(addFeed(res?.data?.users || [])); 
//     } catch (err) {
//       console.log("Error fetching feed:", err);
//     }
//   };

//   useEffect(() => {
//     getFeed();
//   }, []); 

//   if (!feed || feed.length === 0) {
//     return <h1 className="text-center my-10">No Feed Available</h1>;
//   }

//   return (
//     <div className="flex justify-center my-10">
//       {feed.map((user) => (
//         <UserCard key={user._id} user={user} /> 
//       ))}
//     </div>
//   );
// };

// export default Feed;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { addFeed } from '../utils/feedSlice';
import axios from 'axios';
import UserCard from './UserCard';

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [currentUserIndex, setCurrentUserIndex] = useState(0); // State to manage current card

  const getFeed = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true });
      dispatch(addFeed(res?.data?.users || [])); 
    } catch (err) {
      console.log("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []); 

  if (!feed || feed.length === 0) {
    return <h1 className="text-center my-10">No Feed Available</h1>;
  }

  // Handle showing next card
  const handleNextCard = () => {
    if (currentUserIndex < feed.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
    }
  };

  // Handle showing previous card
  const handlePreviousCard = () => {
    if (currentUserIndex > 0) {
      setCurrentUserIndex(currentUserIndex - 1);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div>
        <UserCard key={feed[currentUserIndex]._id} user={feed[currentUserIndex]} />
        
      </div>
    </div>
  );
};

export default Feed;

