import axios from 'axios';
import React from 'react';
import { getUsers } from '../apis/userApi';

const About = () => {
  console.log('About Chal Gya');
  let data = getUsers;
  return <div>About</div>;
};

export default About;
