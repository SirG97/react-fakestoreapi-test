'use client'
import React, { useContext } from 'react';
import Image from "next/image";
import { toast } from 'react-toastify';
import { Store } from '@/app/utils/Store'
const p = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },

  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const getProduct =  async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json()

}

export default function ProductDetails({ params }) {
    const product =  getProduct(params.id); 
    const { state, dispatch } = useContext(Store);

    const addToCartHandler =  () => {
  
      dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: 1 } });
         // Show a success toast notification
         toast.success('Item added to the cart!', {
          position: 'top-right',
          autoClose: 3000, // Auto-close the notification after 3 seconds
      });
  
    };
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-white mb-4">
              <img
                className="w-full h-full object-contain rounded-lg"
                src={product.image}
                alt={product.title}
              />
            </div>
     
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-4">
             {product.description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price:</span>
                <span className="text-md font-medium">${product.price.toFixed(2)}</span>
              </div>
            
            </div>
            <div className="mb-4">
              <div className="flex items-center mt-2">
                <button onClick={addToCartHandler} className="bg-pink-700 text-white rounded-lg py-2 px-3 mr-2">Add to cart</button>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

