import React, { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = [
        {
            id: 1,
            name: 'Women High hill shoes',
            img: 'https://img.freepik.com/free-photo/shoes_1303-3601.jpg?w=996&t=st=1648275498~exp=1648276098~hmac=9503e11560febbb6efa77e1fc79986550db7f864d8b87ed1e997a37a3287699e',
            price: 340,
            discription: 'this best quality party shoes and very comfortable and chef rate'

        },
        {
            id: 2,
            name: 'Man Sports Cates',
            img: 'https://img.freepik.com/free-vector/modern-sport-sneakers-blue-color-with-white-shoelaces-realistic-single-image-white-background-isolated-illustration_1284-31208.jpg?t=st=1648275469~exp=1648276069~hmac=8a1794b78e885e2eb962c54889000a5ba23dac7bb0ebea6decdfa0d3b43d1519',
            price: 390,
            discription: 'this best quality party shoes and very comfortable and chef rate'

        },
        {
            id: 3,
            name: 'Man Black fashion shoes',
            img: 'https://img.freepik.com/free-photo/footwear_1303-4430.jpg?t=st=1648275469~exp=1648276069~hmac=4d4d85a1696055876134d6332a46d9420af2e32a77e15b416259d76cc045e9e7',
            price: 840,
            discription: 'this best quality party shoes and very comfortable and chef rate'

        },
        {
            id: 4,
            name: 'Man Formal Shoes',
            img: 'https://img.freepik.com/free-photo/shoes_1303-3612.jpg?t=st=1648275469~exp=1648276069~hmac=8c51731c3b28cd1399c8df14176ad323a31754473c72f7e37dc1f333bbf57966&w=996',
            price: 1040,
            discription: 'this best quality party shoes and very comfortable and chef rate'

        },
        {
            id: 5,
            name: 'Baby Comfort shoes',
            img: 'https://img.freepik.com/free-vector/leather-black-shoes-women_1308-87025.jpg?t=st=1648275469~exp=1648276069~hmac=13fea9211893fc302ed15f28b29a0bcfbb765987b37073a0761c0a46612906b6',
            price: 340,
            discription: 'this best quality party shoes and very comfortable and chef rate'

        },
        {
            id: 6,
            name: 'Women golden party shoes',
            img: 'https://img.freepik.com/free-photo/women-heeled-shoes_1303-5875.jpg?t=st=1648275469~exp=1648276069~hmac=67032289e6407814586d9de1dc144e94ad2a7625424556ebd403c21bcdde0360',
            price: 840,
            discription: 'this best quality party shoes and very comfortable and chef rate'

        },
        {
            id: 7,
            name: 'Nike top brand',
            img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80',
            price: 340,
            discription: 'this best quality party shoes and very comfortable and chef rate'

        },
        {
            id: 8,
            name: 'Men Glory shoes',
            img: 'https://media.gettyimages.com/photos/elegant-black-leather-shoes-picture-id172417586?s=612x612',
            price: 540,
            discription: 'this best quality party shoes and very comfortable and chef rate'

        },
        {
            id: 9,
            name: 'Formal waking cates',
            img: 'https://static-01.daraz.com.bd/p/d186ec1fadfd80b02822d76dce8c566f.jpg',
            price: 690,
            discription: 'this best quality party shoes and very comfortable and chef rate'

        },
        {
            id: 10,
            name: 'Men Styles shoes',
            img: 'https://cdn.shopify.com/s/files/1/0046/9139/4658/files/SS22_TURING00_1800x1200_crop_center.jpg?v=1645280490',
            price: 1240,
            discription: 'this best quality party shoes and very comfortable and chef rate'

        }
    ];
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        products={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <p>i am here</p>
                <p>Secleted Item:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;