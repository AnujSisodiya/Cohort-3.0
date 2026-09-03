import { api } from '../../../config/api';

const logginUserApi = async (credential) => {
  try {
    let res = await api.post('/auth/login', credential);
    console.log('response in loggin api', res);
  } catch (error) {
    console.log('error in loggin api', error);
  }
};
