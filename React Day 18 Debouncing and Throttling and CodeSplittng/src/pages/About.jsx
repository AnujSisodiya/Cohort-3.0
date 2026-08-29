import React from 'react';
import { useLoaderData } from 'react-router';

/* =========================================================================
 * CONCEPT: LAZY-LOADED PAGE COMPONENT
 * - Loaded asynchronously on-demand when user navigates to `/about`.
 * - `useLoaderData()` retrieves pre-fetched data provided by the route `loader`.
 * ========================================================================= */
const About = () => {
  const usersData = useLoaderData(); // Access data returned by `getUsers` loader function

  return (
    <div>
      <h2>About Page (Lazy Loaded)</h2>
      <p>Loaded users count: {usersData ? usersData.length : 0}</p>
    </div>
  );
};

export default About;
