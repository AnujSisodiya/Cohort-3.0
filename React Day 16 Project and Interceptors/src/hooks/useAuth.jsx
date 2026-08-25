import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Auth } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import React, { useContext } from 'react';

export const useAuth = () => {
  const { registeredUsers, setLoggedInUser, setRegisteredUsers } =
    useContext(Auth);
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginFormSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      return toast.error('User is Invalid check Creds');
    } else {
      toast.success('User LoggedIN Successfull');
      setLoggedInUser(user);
      localStorage.setItem('loggedInUsers', JSON.stringify(user));
      navigate('/main');
    }
  };

  const registerFormSubmit = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);

    toast.success('User Registered Successfully!!');
    setLoggedInUser(data);

    localStorage.setItem('loggedInUsers', JSON.stringify(data));
    localStorage.setItem('registeredUsers', JSON.stringify(arr));

    navigate('/main');
    reset();
  };
  return {
    navigate,
    register,
    handleSubmit,
    errors,
    loginFormSubmit,
    reset,
    registerFormSubmit,
  };
};
