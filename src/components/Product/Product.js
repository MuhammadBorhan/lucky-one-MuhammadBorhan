import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { img, name, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>Name: {name}</h5>
            <p>Price: {price}</p>
        </div>
    );
};

export default Product;