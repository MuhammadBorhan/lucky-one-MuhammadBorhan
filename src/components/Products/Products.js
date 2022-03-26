import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Choosemodal from '../Choosemodal/Choosemodal';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        setCarts([...carts, product]);
        if (carts.length >= 4) {
            alert('this is over')
        }
    }
    const handleChooseForMe = () => {
        const random = Math.floor(Math.random() * 4);
        console.log(random)
        console.log(carts.length)
    }
    const handleChooseAgain = () => {
        setCarts([])
    }
    return (
        <div className='products'>
            <div className='products-display'>
                {
                    products.map(product => <Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className='selected-phone'>
                <h4>Selected Phones</h4>
                {
                    carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
                <button onClick={handleChooseForMe} style={{ color: 'green', fontWeight: 'bold' }}>CHOOSE 1 FOR ME <Choosemodal></Choosemodal></button><br></br>
                <button onClick={handleChooseAgain} style={{ color: '#7C07B3', fontWeight: 'bold' }}>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Products;