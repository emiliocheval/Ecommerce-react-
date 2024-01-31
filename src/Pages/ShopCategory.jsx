import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { products, selectProduct } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    selectProduct(product);
    navigate(`/product/${product._id}`);
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <div key={i} onClick={() => handleProductClick(item)}>
                <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              </div>
            );
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;