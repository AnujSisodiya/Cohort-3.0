import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../Component/UserCard';
import { axiosInstance } from '../config/axiosInstance';
const UserPage = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getUserData = async () => {
    try {
      let res = await axiosInstance.get('users');
      setUserData(res.data);
      setIsLoading(false);
      console.log(res);
    } catch (error) {
      console.log('Error in User Api', error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (isLoading)
    return <h1 className="text-4xl font-semibold">Loading Users</h1>;

  return (
    <div className="grid grid-cols-4 gap-5">
      {userData.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserPage;
