import React from 'react'
import {useForm} from 'react-hook-form'

const Form = () => {
  
  let {handleSubmit,register,reset, formState:{errors}} = useForm();

  const formSubmit = (data) =>{
    console.log(data);
    reset();
  }
  return (
    <div className='p-4 w-80 '>
        <form onSubmit={handleSubmit(formSubmit)} className=' bg-white flex flex-col p-6 gap-5 rounded-xl'>
            <input {...register("ProductName")} className='border-2 p-2 rounded' type="text" placeholder='Product Name' />
            <input {...register("Price")} className='border-2 p-2 rounded' type="text" placeholder='Price' />
            <span>Select Category:</span>
            <select {...register("Category")} className='border-2 p-2 rounded' name="" id="">
                <option value="">Select</option>
                <option value="">Men</option>
                <option value="">Women</option>
                <option value="">Kids</option>
            </select>
            <input {...register("Image")} className='border-2 p-2' type="text" placeholder='Image Url`' />
            <button className='p-2 bg-blue-500 text-white rounded uppercase'>Create</button>
        </form>
    </div>
  )
}

export default Form