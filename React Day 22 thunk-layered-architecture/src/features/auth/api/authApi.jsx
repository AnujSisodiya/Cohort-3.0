import { api } from '../../../config/api';

export const logginUserApi = async (credential) => {
  try {
    let res = await api.post('/auth/login', credential);
    console.log('response in loggin api', res);
    localStorage.setItem('accessToken', res.data.accessToken);
    return res.data;
  } catch (error) {
    console.log('error in loggin api', error);
  }
};

export const hydrateUser = async (credential) => {
  let token = localStorage.getItem('accessToken');
  try {
    let res = await api.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
      },
    });
    console.log('response in Hydrate user api', res);
    return res.data;
  } catch (error) {
    console.log('error in Hydrate api', error);
  }
};
