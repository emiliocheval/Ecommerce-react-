import React, { useContext } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const NewCollections = () => {
    const { products } = useContext(ShopContext);

    return (
        <div className='newcollections'>
            <h1>New</h1>
            <div className="newcollections-items">
                {products.map((item, i) => {
                    return (
                        <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    )
                })}
            </div>
        </div>
    )
}

export default NewCollections