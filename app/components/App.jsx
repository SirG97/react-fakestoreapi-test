'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { hideLoading } from '../redux/slices/cartSlice'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar';

export default function App({ children }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])
  const { cartItems, loading } = useSelector((state) => state.cart)
  const pathname = usePathname()

  return (
    <div>
      <div
        className={`${
          loading
            ? ''
            : cartItems.length > 0 &&
              (pathname === '/' || pathname.indexOf('/product/') >= 0)
            ? 'mr-32'
            : ''
        }`}
      >
        <Navbar />
        {children}
      </div>
  
    </div>
  )
}