import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ setToggle, setUserData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const formSubmit = (data) => {
    console.log(data);
    setUserData((prev) => [...prev, data]);
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-6 text-white">
      <h1 className="text-center text-xl font-semibold">Create User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-80 flex flex-col gap-3 p-4 border border-white rounded-xl bg-black text-white"
      >
        <input
          {...register('name', { required: 'Name is required' })}
          className="p-2 rounded outline-0 border-2 border-white"
          type="name"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}
        <input
          {...register('Email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Please enter valid email',
            },
          })}
          className="p-2 rounded outline-0 border-2 border-white"
          type="text"
          placeholder="Email"
        />
        {errors.Email && <p className="text-red-400">{errors.Email.message}</p>}
        <input
          {...register('Number', {
            required: 'Phone Number is required',
            minLength: {
              value: 10,
              message: 'Minimum 10 digits are required',
            },
            maxLength: {
              value: 10,
              message: 'Maximum 10 digits are required',
            },
          })}
          className="p-2 rounded outline-0 border-2 border-white"
          type="number"
          placeholder="Mobile"
        />
        {errors.Number && (
          <p className="text-red-400">{errors.Number.message}</p>
        )}
        <input
          {...register('image', {
            required: 'Image is required',
          })}
          className="p-2 rounded outline-0 border-2 border-white"
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className="text-red-400">{errors.image.message}</p>}
        <button className="py-2 px-3 bg-blue-500 rounded cursor-pointer">
          Create User
        </button>
      </form>
    </div>
  );
};

export default Form;
