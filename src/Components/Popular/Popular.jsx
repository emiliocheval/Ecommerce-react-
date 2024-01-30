import React, { useContext } from 'react';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';
import './Popular.css';

const Popular = () => {
    const { products } = useContext(ShopContext);

    // Select only the first 5 products
    const displayedProducts = products.slice(0, 6);

    return (
        <div className='popular'>
            <h1>POPULAR</h1>
            <hr />
            <div className="popular-item">
                {displayedProducts.map(product => {
                    const imageUrls = Array.isArray(product.images) ? product.images : product.images.split(',');
                    console.log(imageUrls);

                    return (
                        <div key={product._id}>
                            <Item productId={product._id} />



                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Popular;