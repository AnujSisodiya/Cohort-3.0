import React, { memo } from 'react';

const About = () => {
  console.log('About rendering');
  return <div>About this side</div>;
};

export default React.memo(About);
