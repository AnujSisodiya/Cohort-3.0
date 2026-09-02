import axios from 'axios';
import { axiosInstance } from '../config/axiosInstance';

export const getProductsData = async () => {
  try {
    let res = await axiosInstance.get('/products');
    console.log(res.data.products);
    return res.data.products;
  } catch (error) {
    console.log('Error in Product API', error);
  }
};
