import React, { memo } from 'react';

const Home = () => {
  console.log('Home rendering');
  return <div>Home this side</div>;
};

export default React.memo(Home);
