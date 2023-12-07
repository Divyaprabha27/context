import React from 'react';
import products from '../appData';
import './Home.css';
import ProductCard from './ProductCard';
const Home = () => {
    return (
        <div className="products_wrapper">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default Home;