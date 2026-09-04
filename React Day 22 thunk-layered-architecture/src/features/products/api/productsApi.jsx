import { api } from '../../../config/api';

export const getAllProducts = async (search) => {
  let url = search ? `/products/search?q=${search}` : '/products';

  try {
    let res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log('Error in products APi', error);
  }
};

export const getAllCategories = async () => {
  try {
    let res = await api.get('products/categories');

    return res.data;
  } catch (error) {
    console.log('Error in categories APi', error);
  }
};
