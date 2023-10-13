'use client'
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'


// export default function AddToCart({product, qty, showQty = true, redirect = false, increasePerClick = false}){
//     const dispatch = useDispatch()
    
//     const { cartItems } = useSelector((state) => state.cart)
//     const router = useRouter()
//     // const [qty, setQty] = useState(1)

//     const addToCartHandler = () => {
//         console.log(product)
//         let newQty = qty
//         // if (increasePerClick) {
//           const existItem = cartItems.find((x) => x.id === product.id)
//           if (existItem) {
//             if (existItem.qty + 1 <= product.countInStock) {
//               newQty = existItem.qty + 1
//             } else {
//               return alert('No more product exist')
//             }
//         //   }
//         }
//         // arr = Object.entries(obj).map(([key, value]) => value);
//         dispatch(addToCart({ ...product, qty: newQty }))
    
//         // if (redirect) router.push('/cart')
//       }

//       return (
//         <>
//           <div>
//             <button onClick={addToCartHandler} className="text-white bg-pink-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//                 </svg>
//             </button>
//           </div>
//         </>
//       )

// }

export default function AddToCart({
    product,
    showQty = true,
    redirect = false,
    increasePerClick = false,
  }) {
    const dispatch = useDispatch()
  
    const { cartItems } = useSelector((state) => state.cart)
    const router = useRouter()
    const [qty, setQty] = useState(1)
  
    const addToCartHandler = () => {
      let newQty = qty
      if (increasePerClick) {
        const existItem = cartItems.find((x) => x.id === product.id)
        if (existItem) {
          if (existItem.qty + 1 <= product.countInStock) {
            newQty = existItem.qty + 1
          } else {
            return alert('No more product exist')
          }
        }
      }
      dispatch(addToCart({ ...product, qty: newQty }))
  
      if (redirect) router.push('/cart')
    }
  
    return (
      <>
        {product.countInStock > 0 && showQty && (
          <div className="mb-2 flex justify-between">
            <div>Qty</div>
            <div>
              <select
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>{' '}
            </div>
          </div>
        )}
        <div>
          {!product.countInStock ? (
            <button className="text-white bg-pink-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={addToCartHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </button>
          ) : (
            <button disabled>Out of stock</button>
          )}
        </div>
      </>
    )
  }