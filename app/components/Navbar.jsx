'use client'
import { Fragment, useState, useContext, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Store } from '../utils/Store'
import Image from 'next/image'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems !== undefined && cart.cartItems.length > 0 ? cart.cartItems.reduce((a, c) => a + c.quantity, 0): 0);
  }, [cart.cartItems]);

  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
           
              {/* Logo */}
              <div className="ml-4 inline-flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    width={32}
                    className="h-8 w-auto inline"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                  <div className="ml-1 inline text-md font-medium">Fakestore</div>
                </a>
              </div>

          

              <div className="ml-auto flex items-center d-none">
                {/* Search */}
                {/* <div className="flex lg:ml-6 d-none">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div> */}

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {cartItemsCount > 0 && (
                      <span className="ml-2 px-1 -py-1 rounded-full text-sm font-medium text-white bg-pink-500 ">
                        {cartItemsCount}
                      </span>
                    )}
                    
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
