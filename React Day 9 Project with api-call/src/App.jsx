import axios from 'axios';
import { React, useState, useEffect } from 'react';
import Nav from './Components/Nav';
import ProductCards from './Components/ProductCards';
import CartScreen from './Pages/CartScreen';

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const getProductsData = async () => {
    try {
      let res = await axios.get('https://fakestoreapi.com/products');
      setProductsData(res.data);
    } catch (error) {
      console.log('Error in Api', error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <Nav setIsCartOpen={setIsCartOpen} />
      {isCartOpen ? (
        <div>
          <CartScreen cartItems={cartItems} />
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 p-4">
          {productsData.map((elem) => {
            return (
              <ProductCards
                key={elem.id}
                product={elem}
                setCartItems={setCartItems}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
