import axios from 'axios';

export let getUsers = () => {
  let res = axios.get('https://fakestoreapi.com/users');
  console.log(res.data);
};
