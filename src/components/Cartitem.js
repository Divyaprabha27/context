import React from 'react';
import { useContext } from 'react';
import './Cartitem.css';
import CartContext from '../context/cart/CartContext';
import formatCurrency from 'format-currency';

const Cartitem = ({item}) => {
    const { removeItem } = useContext(CartContext);
    let opts = { format: '%s%v', symbol: '€'}
    return <li className="CartItem_item">
        <img src={item.img} alt="" />
        <div className="move">
            {item.title}<br /> {formatCurrency(`${item.price}`,opts)}
        </div>
        <button className="CartItem_button" onClick={()=>removeItem(item.id)}>
            Remove
        </button>
    </li>
};

export default Cartitem;