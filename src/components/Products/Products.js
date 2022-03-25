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
            <div className='products-info'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div>right</div>
        </div>
    );
};

export default Products;