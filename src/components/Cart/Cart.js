import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './Cart.css'

const Cart = ({ cart }) => {
    const { img, name } = cart;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <p>{name}</p>
            <span><FaTrashAlt></FaTrashAlt></span>
        </div>
    );
};

export default Cart;