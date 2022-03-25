import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';

import './Product.css'

const Product = ({ product }) => {
    const { img, name, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>Name: {name}</h5>
            <p>Price: {price}</p>
            <button>Add to Cart <span className='icon'><FaShoppingBasket></FaShoppingBasket></span></button>
        </div>
    );
};

export default Product;