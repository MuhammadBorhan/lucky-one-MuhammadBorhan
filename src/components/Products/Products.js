import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Choosemodal from '../Choosemodal/Choosemodal';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [randoms, setRandoms] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //handle Add To Cart
    const handleAddToCart = (product) => {

        if (carts.length <= 3) {
            setCarts([...carts, product]);

        }
    }

    // Handle choose for me
    const handleChooseForMe = () => {
        const item = carts[Math.floor(Math.random() * carts.length)]
        setRandoms(item)
    }

    // Handle choose again
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

                    <button onClick={handleChooseForMe} style={{ color: 'green', fontWeight: 'bold' }}><Choosemodal random={randoms}></Choosemodal></button><br></br>
                    <button onClick={handleChooseAgain} style={{ color: '#7C07B3', fontWeight: 'bold' }}>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};
export default Products;