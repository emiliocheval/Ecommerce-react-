import React, { useState, useEffect } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://js2-ecommerce-api.vercel.app/api/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [productId]);

    // If product is not found, return null or some placeholder
    if (!product) {
        return null; // or a loading spinner, or some other placeholder
    }

    const { _id, name, images } = product;

    return (
        <Link to={`/product/${_id}`} className="product-link" onClick={() => window.scrollTo(0, 0)}>
            <div className='item'>
                <img src={Array.isArray(images) ? images[0] : images} alt="" />
                <h2>{product.name}</h2>
                <p>{product.price} Kr</p>
            </div>
        </Link>
    );
}

export default Item;
