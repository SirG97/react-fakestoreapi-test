'use client'
import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
export const Store = createContext()

const initialState = {
  cart: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : { cartItems: [] },
};

function reducer(state, action) {
    switch (action.type) {
      case 'CART_ADD_ITEM': {
        const newItem = action.payload;
        const existItemIndex = state.cart.cartItems.findIndex(
          (item) => item.id === newItem.id
        );
        console.log(existItemIndex);
      
        if (existItemIndex !== -1) {
          // Item already exists in the cart
          const updatedCartItems = [...state.cart.cartItems];
          updatedCartItems[existItemIndex] = {
            ...updatedCartItems[existItemIndex],
            quantity: updatedCartItems[existItemIndex].quantity + newItem.quantity,
          };
      
          Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems: updatedCartItems }));
      
          return { ...state, cart: { ...state.cart, cartItems: updatedCartItems } };
        } else {
          // Item does not exist in the cart
          const updatedCartItems = [...state.cart.cartItems, newItem];
      
          Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems: updatedCartItems }));
      
          return { ...state, cart: { ...state.cart, cartItems: updatedCartItems } };
        }
      }
      case 'CART_REMOVE_ITEM': {
        const cartItems = state.cart.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
        return { ...state, cart: { ...state.cart, cartItems } };
      }
      case 'CART_RESET':
        return {
          ...state,
          cart: {
            cartItems: [],
            shippingAddress: { location: {} },
            paymentMethod: '',
          },
        };
      case 'CART_CLEAR_ITEMS':
        return { ...state, cart: { ...state.cart, cartItems: [] } };
 
        return {
          ...state,
          cart: {
            ...state.cart,
            paymentMethod: action.payload,
          },
        };
      default:
        return state;
    }
}

export function StoreProvider({ children }) {
const [state, dispatch] = useReducer(reducer, initialState);
const value = { state, dispatch };
return <Store.Provider value={value}>{children}</Store.Provider>;
}