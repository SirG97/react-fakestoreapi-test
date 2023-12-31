'use client'
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../utils/Store'
import { toast } from 'react-toastify';

function FeaturedProducts({products}) {
    const { state, dispatch } = useContext(Store);
    const addToCartHandler = async (product) => {

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: 1 } });
         // Show a success toast notification
    // Show a success toast notification
        toast.success('Item added to the cart!', {
            position: 'top-right',
            autoClose: 3000, // Auto-close the notification after 3 seconds
        });
    };
    return (
        <div className="flex flex-col bg-white overflow-x-hidden m-auto p-auto w-full">
          <h1 className="flex py-5 px-5 font-bold text-lg text-gray-800">
            Hot Deals
          </h1>
          <div className="flex overflow-x-scroll pb-10 no-scrollbar">
            <div className="flex flex-nowrap ">
                {
                    products.map((product) => (
                    <div key={product.id} className="inline-block px-3 relative">
                        <div className="relative w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <Link href={`/products/${product.id}`}>
                                <Image fill={true} className="p-1 h-64 w-64 object-contain object-center rounded-t-lg" src={product.image} alt="product image" />
                            </Link>

                            <div className="px-1 pb-1 w-full absolute bottom-0 backdrop-brightness-50">
                                <Link href={`/products/${product.id}`}>
                                    <h5 className="text-sm tracking-tight pb-1 truncate text-white dark:text-white">{product.title}</h5>
                                </Link>
                                        
                                <div className="flex items-center justify-between">
                                    <span className="text-base font-medium text-white dark:text-white">${product.price.toFixed(2)}</span>
                                    <button onClick={() => {addToCartHandler(product)}} className="cursor:pointer text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                ))}
              
            </div>
          </div>
        </div>
      );
 
}
export default FeaturedProducts;





