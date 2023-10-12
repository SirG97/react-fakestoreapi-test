'use client'
import React, {createContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [product, setProduct] = useState([])
    //fetch the product from fakeapi
    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json();
            console.log(data)
        }

        fetchProducts();
    },[])
    return <ProductContext.Provider>{children}</ProductContext.Provider>
}

export default ProductContext; 