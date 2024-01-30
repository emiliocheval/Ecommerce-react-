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
                setCartItems(getDefaultCart(data));
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const getDefaultCart = (products) => {
        let cart = {};
        for (let index = 0; index < products.length + 1; index++) {
            cart[index] = 0;
        }

        return cart;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: prev[itemId] + 1
        }));
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: prev[itemId] - 1
        }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }

    const GetTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue = { GetTotalCartItems, getTotalCartAmount, products, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;