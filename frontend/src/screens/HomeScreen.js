import data from '../data';
import Product from '../components/Product';
import React from 'react';

const HomeScreen = () => {
    return (
        <div>
            <div className='row center'>
                {data.products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;
