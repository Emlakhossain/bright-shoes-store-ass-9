import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, products } = props;
    const { name, img, price, id, discription } = products;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='cart-text'>
                <h4 className='text'>Name:{name}</h4>
                <p className='text'>Price:{price}</p>
                <p className='text'>Id:{id}</p>
                <p className='text'>Discription:{discription}</p>
                <button onClick={() => handleAddToCart(products)} className='btn-cart'>
                    <p>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>

        </div>
    );
};

export default Product;