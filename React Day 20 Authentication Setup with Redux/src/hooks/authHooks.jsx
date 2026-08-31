import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { addUser } from '../features/authSlice';
import { useState } from 'react';

export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem('registeredUsers')) || []
  );

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let loginForm = (data) => {
    let user = registeredUsers.find((val) => {
      return data.email === val.email && data.password === val.password;
    });
    if (!user) {
      toast.error('Invalid Credentials');
      return;
    }
    dispatch(addUser(user));
    localStorage.setItem('loggedInUsers', JSON.stringify(user));
    toast.success('Login Successfull');
    reset();
  };

  let registerForm = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    localStorage.setItem('registeredUsers', JSON.stringify(arr));
    reset();
    toast.success('Registration Successfull');
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};
