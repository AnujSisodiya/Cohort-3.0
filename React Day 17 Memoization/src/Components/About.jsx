import React, { memo } from 'react';

const About = ({ greet }) => {
  greet();
  console.log('About rendering');
  return <div>About this side</div>;
};

export default React.memo(About);
