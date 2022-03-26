import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    const handleClearBtn = (product) => {
        const newData = product.length;
        console.log(newData)
        product.length = '';
    }

    return (
        <div className='cart'>
            <ul className='new-cart'>
                <p className='Cart-heading'>Chose Your Shoes:</p>
                {
                    cart.map(product => <li>
                        <img src={product.img} alt="" /> {product.name}
                    </li>)
                }
            </ul>
            <button className='chose-btn'>CHOSE 1 FOR ME</button>
            <button onClick={() => handleClearBtn(cart)} className='btn'>Chuse Again</button>
        </div>
    );
};

export default Cart;