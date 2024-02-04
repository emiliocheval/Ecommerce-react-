// CartItems.jsx

import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, products, cartItems, removeFromCart, clearCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {products.map((product) => {
                const quantity = cartItems[product._id] || 0; // Get quantity based on product ID
                if (quantity > 0) {
                    return (
                        <div key={product._id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={product.images[0]} alt={product.name} className='carticon-product-icon' />

                                <p>{product.name}</p>
                                <p>{quantity}</p>
                                <p>{product.price * quantity} KR</p>
                                <img src={remove_icon} alt="" className='carticon-cross-icon' onClick={() => removeFromCart(product._id)} />
                            </div>
                            <hr key={`hr_${product._id}`} />
                        </div>
                    );
                }

                return null;
            })}
            <div className="cartitems-total">
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>{getTotalCartAmount()} KR</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>{getTotalCartAmount()} KR</h3>
                </div>
                <button onClick={clearCart}>Clear Cart</button>
                <button>PROCEED</button>
            </div>
        </div>
    );
};

export default CartItems;
