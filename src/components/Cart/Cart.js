import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    return (
        <div className='cart'>
            <h2>Hello</h2>
            <p>i am here</p>
            <p>Secleted Item QTY:{cart.length}</p>
            <p>Product Name:{props.price}</p>
        </div>
    );
};

export default Cart;