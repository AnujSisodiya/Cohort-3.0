import React, { memo } from 'react';

const Home = ({ user }) => {
  console.log('Home rendering');
  return <div>Home this side</div>;
};
// React.memo takes a 2nd optional argument: a custom comparison function (arePropsEqual).
// (prevProps, nextProps) => boolean
// - Return true  => Props are EQUAL  => SKIP re-rendering.
// - Return false => Props are DIFFERENT => DO re-render.

export default React.memo(Home, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;
  // Only re-render if 'user.id' changes.
  // Ignore changes to other properties like 'user.name'.
  // Since 'user.id' remains 234 when clicking "Change Name", this returns true, so Home will NOT re-render.
});
