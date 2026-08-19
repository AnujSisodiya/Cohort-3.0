import React from 'react';
import { useNavigate, Outlet } from 'react-router';

const About = () => {
  let nevigate = useNavigate();
  return (
    <div>
      <h1>This is About Page.</h1>
      <button onClick={() => nevigate('/about/nestedAbout')}>
        Nested Ko Dhikao
      </button>
      <Outlet />
    </div>
  );
};

export default About;
