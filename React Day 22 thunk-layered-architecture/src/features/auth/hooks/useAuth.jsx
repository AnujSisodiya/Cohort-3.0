import React from 'react';
import { useNavigate } from 'react-router';

const useAuth = () => {
  let navigate = useNavigate();
  let { register, handleSubmit, reset, formState = { errors } } = useForm();

  let loginForm = () => {
    try {
    } catch (error) {
      console.log('error in login api', error);
    }
  };
  let registerForm = () => {
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
