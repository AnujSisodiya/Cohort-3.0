import React from "react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  let [formData, setFromdata] = useState({});
  const formRef = useRef({});

  const handleSumbit = (e) => {
    e.preventDefault();

    let obj = {
      productName: formRef.current.productName.value,
      price: formRef.current.price.value,
      category: formRef.current.category.value,
      image: formRef.current.image.value,
    };

    setFromdata(obj);
  };
  return (
    <div className="p-4 w-80 ">
      <form
        onSubmit={handleSumbit}
        className=" bg-white flex flex-col p-6 gap-5 rounded-xl"
      >
        <input
          ref={(e) => (formRef.current.productName = e)}
          className="border-2 p-2 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
          ref={(e) => (formRef.current.price = e)}
          className="border-2 p-2 rounded"
          type="text"
          placeholder="Price"
        />
        <span>Select Category:</span>
        <select
          ref={(e) => (formRef.current.category = e)}
          className="border-2 p-2 rounded"
          name=""
          id=""
        >
          <option value="">Select</option>
          <option value="">Men</option>
          <option value="">Women</option>
          <option value="">Kids</option>
        </select>
        <input
          ref={(e) => (formRef.current.image = e)}
          className="border-2 p-2"
          type="text"
          placeholder="Image Url"
        />
        <button className="p-2 bg-blue-500 text-white rounded uppercase">
          Create
        </button>
      </form>

      <h1>{formData.productName}</h1>
      <h1>{formData.price}</h1>
      <h1>{formData.category}</h1>
      <h1>{formData.image}</h1>
    </div>
  );
};

export default Form;
