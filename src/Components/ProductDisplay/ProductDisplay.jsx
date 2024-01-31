import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import DescriptionBox from '../DescriptionBox/DescriptionBox'; // Import DescriptionBox component

const ProductDisplay = () => {
    const { productId } = useParams();
    const { products, addToCart } = useContext(ShopContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const product = products.find(product => product._id === productId);
        setProduct(product);
    }, [products, productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    let imageSrc = Array.isArray(product.images) ? product.images : [product.images];

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {imageSrc.map((src, index) => (
                        <img key={index} src={src} alt="" />
                    ))}
                </div>
                <div className="productdisplay-main">
                    <img className='productdisplay-main-img' src={imageSrc[0]} alt="" />
                    <h1>{product.name}</h1>
                    <p>{product.price}KR</p>
                    {/* Use the DescriptionBox component */}
                    <DescriptionBox description={product.description} />
                </div>
            </div>
            <div className="productdisplay-right">

            </div>
        </div>
    );
};

export default ProductDisplay;
