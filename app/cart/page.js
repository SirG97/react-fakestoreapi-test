'use client'
import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import dynamic from 'next/dynamic';
const Cart = () => {
  const { state, dispatch } = useContext(Store);
  const { cartItems } = state.cart;

  const removeFromCartHandler = (product) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: product });
  };

  const incrementQuantityHandler = (product) => {
    dispatch({ type: 'CART_INCREMENT_QUANTITY', payload: product });
  };

  const decrementQuantityHandler = (product) => {
    dispatch({ type: 'CART_DECREMENT_QUANTITY', payload: product });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={item.image} alt={item.title} className="w-full h-32 object-cover mb-2" />
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-500 text-sm mb-2">${item.price.toFixed(2)}</p>
              <div className="flex items-center mb-2">
                <button
                  onClick={() => decrementQuantityHandler(item)}
                  className="text-red-500 hover:text-red-700 p-2"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => incrementQuantityHandler(item)}
                  className="text-green-500 hover:text-green-700 p-2"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCartHandler(item)}
                className="text-white bg-red-500 hover:bg-red-700 rounded-lg px-4 py-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-5">
          <h2 className="text-xl font-semibold">Total Price: ${calculateTotalPrice().toFixed(2)}</h2>
          <button className="text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-4 py-2 mt-2">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
