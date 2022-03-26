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
        setCarts([...carts, product])
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
                <button style={{ color: 'green', fontWeight: 'bold' }}>CHOOSE 1 FOR ME</button><br></br>
                <button style={{ color: '#7C07B3', fontWeight: 'bold' }}>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Products;