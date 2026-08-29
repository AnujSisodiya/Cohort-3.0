import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [searchProduct, setSearchProduct] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [scrollY, setScrollY] = useState(null);
  let throttle = false;
  let getProducts = async () => {
    let res = await axios.get('https://fakestoreapi.com/products');
    setProductsData(res.data);
  };
  let filteredData = () => {
    console.log('filterdata Running..');
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchProduct.toLowerCase());
    });
    setProductsData(result);
  };
  useEffect(() => {
    getProducts();
  }, []);

  // useEffect handles the Debouncing mechanism.
  // It re-runs every time the `searchProduct` state changes (as specified in the dependency array `[searchProduct]`).
  useEffect(() => {
    // 1. Guard Clause: If searchProduct is null, undefined, or empty (""),
    // stop execution immediately so we don't attempt to filter empty data.
    if (!searchProduct) return;

    // 2. Set a Timer (Debounce Delay):
    // Wait 300 milliseconds before calling the filteredData() function.
    let timeout = setTimeout(() => {
      filteredData();
    }, 300);

    // 3. Cleanup Function:
    // This runs automatically BEFORE this effect triggers again (e.g., when the user types another letter)
    // or when the component unmounts.
    // `clearTimeout(timeout)` cancels the pending timer so `filteredData()` won't run for the previous keystroke!
    return () => clearTimeout(timeout);
  }, [searchProduct]); // 4. Dependency Array: Triggers this effect whenever `searchProduct` changes

  //throtlling....

  // Throttling useEffect: Ensures the scroll handler executes AT MOST once every 2 seconds (2000ms),
  // no matter how many hundreds of scroll events are fired by the browser.
  useEffect(() => {
    // Scroll event handler function
    let handleScroll = () => {
      // 1. Lock Check: If `throttle` is true (cooldown active), ignore this scroll event immediately.
      if (throttle) return;

      // 2. Activate Lock: Set `throttle` to true so subsequent scroll events are ignored.
      throttle = true;

      // 3. Perform the actual task (logging and updating scroll Y position)
      console.log('Scrolling Triggered...');
      setScrollY(window.scrollY);

      // 4. Cooldown Timer: Wait for 2000ms (2 seconds) before resetting the lock back to false.
      // After 2 seconds, the next scroll event will be allowed to run.
      setTimeout(() => {
        throttle = false;
      }, 2000);
    };

    // 5. Event Listener: Attach the `handleScroll` function to the window's 'scroll' event.
    window.addEventListener('scroll', handleScroll);

    // 6. Cleanup Function: Removes the event listener when the component unmounts to prevent memory leaks.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array [] ensures listener is attached only once on component mount.

  return (
    <div>
      <h1>Debouning...</h1>
      <input
        type="text"
        placeholder="Search Products..."
        onChange={(e) => setSearchProduct(e.target.value)}
      />
      {productsData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
