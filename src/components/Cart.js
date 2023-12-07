import React from 'react';
import {useContext} from 'react';
import './Cart.css';
import CartContext from '../context/cart/CartContext';
import CartItem from './Cartitem';
import formatCurrency from 'format-currency';

const Cart = () => {
    const {showCart,cartItems,showHideCart} = useContext(CartContext);
    let opts = { format: "%s%v", symbol: "€"};
    return (
        <>
    {showCart && (
        <div className="cart_wrapper">
            <div style={{textAlign:"right"}}>
                <i style={{cursor:"pointer"}} className="fa fa-times-circle" 
                aria-hidden='true' onClick={showHideCart}></i>
            </div>
            <div className="cart_innerWrapper">
                {cartItems.length === 0 ? (<h4>Cart is Empty</h4>):(
                    <ul>
                        {cartItems.map(item=>(
                            <CartItem key={item.id} item={item}/>
                        ))}
                    </ul>
                )}
            </div>
            <div className="Cart_cartTotal">
                <div>
                    Cart Total
                </div>
                <div></div>
                <div style={{marginLeft:5}}>
                €{formatCurrency(cartItems.reduce((amount,item)=>item.price + amount,0))}
                </div>
            </div>
        </div>
    )}
    </>
    );
};

export default Cart;