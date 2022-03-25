import React, { useEffect, useState } from 'react';
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
            <div>
                {
                    products.map(product => console.log(product))
                }
            </div>
            <div>right</div>
        </div>
    );
};

export default Products;