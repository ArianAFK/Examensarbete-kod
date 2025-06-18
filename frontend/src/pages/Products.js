import React from 'react';
import ProductList from '../components/ProductList';

const Products = ({ addToCart }) => {
    return (
        <div>
            <ProductList addToCart={addToCart} />
        </div>
    );
};

export default Products;
