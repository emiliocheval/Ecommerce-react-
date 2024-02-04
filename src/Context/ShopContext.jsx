// shopcontext.jsx

import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://js2-ecommerce-api.vercel.app/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setCartItems(getDefaultCart(products));
    }, [products]);

    useEffect(() => {
        const totalAmount = getTotalCartAmount();
    }, [cartItems, products]);

    const getDefaultCart = (products) => {
        let cart = {};
        for (let index = 0; index < products.length; index++) {
            cart[products[index]._id] = 0;
        }
        return cart;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max(0, (prev[itemId] || 0) - 1),
        }));
    };

    const clearCart = () => {
        setCartItems(getDefaultCart(products));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const product = products.find(product => product._id === itemId);
            if (product) {
                totalAmount += product.price * cartItems[itemId];
            }
        }
        return totalAmount;
    };

    const GetTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = { GetTotalCartItems, getTotalCartAmount, products, cartItems, addToCart, removeFromCart, clearCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
