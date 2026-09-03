import React from 'react';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
  let {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              {...register('username', {
                required: 'username is required..',
              })}
              type="username"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              {...register('password', {
                required: 'Password is required..',
                minLength: {
                  value: 8,
                  message: 'Minimum 8 character required..',
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?
          <button
            onClick={() => navigate('/register')}
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
