import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        carts.map(item => item)
        const random = Math.floor(Math.random() * 4)
        console.log(random)

        /* for (let i = 0; i < carts.length; i++) {

        } */



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

                <div>

                    <button onClick={handleChooseForMe} style={{ color: 'green', fontWeight: 'bold' }}>CHOOSE FOR ME</button><br></br>
                    <button onClick={handleChooseAgain} style={{ color: '#7C07B3', fontWeight: 'bold' }}>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};
export default Products;