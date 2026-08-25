import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('In Interceptors', response);
    return response;
  },
  (error) => {
    console.log(error);
  }
);

// For Request

// axiosInstance.interceptors.request.use(
//     ()=>{},
//     ()=>{}
// );
