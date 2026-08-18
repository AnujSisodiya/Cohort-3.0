import { React, useContext } from 'react';
import CartCard from '../Components/CartCard';
import { MyStore } from '../Context/MyStore';

const CartScreen = () => {
  let { cartItems } = useContext(MyStore);
  return (
    <div className="h-screen p-5 gap-4 grid grid-cols-3">
      {cartItems.map((elem) => {
        return <CartCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
