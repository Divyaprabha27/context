import React from 'react';
import { useContext } from 'react';
import './ProductCard.css';
import formatCurrency from 'format-currency';
import Rating from './Rating';
import CartContext from '../context/cart/CartContext';
const ProductCard = ({product}) => {
    let opts = { format: '%s%v',symbol: '€'};
    const { addToCart  } = useContext(CartContext)
    return (
        <div className="ProductCard_wrapper">
            <img className="ProductCard_img" src={product.img} alt=""/>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <div className="Product_price">
                <h5>{formatCurrency(`${product.price}`,opts)}</h5>
            </div>
            <div className="ProductCard_rating">
                <Rating value={product.rating}/>
            </div>
            <button className="ProductCard_button" onClick={()=>addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;