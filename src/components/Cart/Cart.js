import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const { img, name, id } = cart;
    return (
        <div className='cart'>
            {name}
        </div>
    );
};

export default Cart;