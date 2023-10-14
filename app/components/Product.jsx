'use client'
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../utils/Store'
import { toast } from 'react-toastify';
const ProductCard = ({ product }) => {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = async () => {

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: 1 } });
       // Show a success toast notification
       toast.success('Item added to the cart!', {
        position: 'top-right',
        autoClose: 3000, // Auto-close the notification after 3 seconds
    });

  };

  return (
    <div key={product.id} className="group relative">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex-row justify-between">
          <div className="text-ellipsis w-full">
          
            <h3 className="text-md font-semibold text-gray-700 truncate">
                {product.title}
            </h3>
          
          </div>
          <p className="text-md font-medium text-gray-900">${product.price.toFixed(2)}</p>
          
        </div>
      </Link>

      <button onClick={addToCartHandler} className="w-full py-3 cursor:pointer text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         Add to cart
      </button>

    </div>
        
       

  );
};




const Example = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 truncate">
                    <Link to={`/product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                 
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default ProductCard;