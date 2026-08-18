import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import Nav from './Components/Nav';
import ProductCards from './Components/ProductCards';
import CartScreen from './Pages/CartScreen';
import { MyStore } from './Context/MyStore';

const App = () => {
  const [productsData, setProductsData] = useState([]);
  let { isCartOpen, cartItems } = useContext(MyStore);
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
      <Nav />
      {isCartOpen ? (
        <div>
          <CartScreen />
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 p-4">
          {productsData.map((elem) => {
            let isInCart = cartItems.find((val) => val.id === elem.id);

            return (
              <ProductCards key={elem.id} product={elem} isInCart={isInCart} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
