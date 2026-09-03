import React from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUserAction } from '../state/authAction';

const useAuth = () => {
  let navigate = useNavigate();
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let dispatch = useDispatch();

  const loginForm = async (data) => {
    try {
      dispatch(loginUserAction(data));
      toast.success('User Logged IN');
    } catch (error) {
      console.log('error in login form api', error);
    }
  };

  //   let navigate = useNavigate();
  //   let {
  //     register,
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  //   } = useForm();
  //   let dispatch = useDispatch();
  //   let loginForm = async (data) => {
  //     try {
  //       try {
  //         let response = await logginUserApi(data);
  //         dispatch(addUser(response));
  //         toast.success('User Logged IN');
  //       } catch (error) {
  //         console.log('error in form api', error);
  //       }
  //     } catch (error) {
  //       console.log('error in login api', error);
  //     }
  //   };
  let registerForm = (data) => {
    try {
    } catch (error) {
      console.log('error in register api', error);
    }
  };
  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginForm,
    registerForm,
  };
};

export default useAuth;
