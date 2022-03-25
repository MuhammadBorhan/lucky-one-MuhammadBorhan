import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='products'>
            <div className='products-display'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='selected-phone'>
                <h4>Selected Phones</h4>
                <button>CHOOSE 1 FOR ME</button><br></br>
                <button>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Products;