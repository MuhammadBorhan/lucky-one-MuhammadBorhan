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

        if (carts.length <= 3) {
            setCarts([...carts, product]);
        }
    }
    const handleChooseForMe = () => {
        const random = Math.ceil(Math.random() * 4);
        console.log(random)
        const chooseItem = carts.find(cart => cart.id === random)
        alert(chooseItem.name)
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

                <button onClick={handleChooseForMe} style={{ color: 'green', fontWeight: 'bold' }}>CHOOSE FOR ME</button><br></br>
                <button onClick={handleChooseAgain} style={{ color: '#7C07B3', fontWeight: 'bold' }}>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Products;