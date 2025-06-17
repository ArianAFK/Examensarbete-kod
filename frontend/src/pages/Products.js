import React from 'react';
import ProductList from '../components/ProductList';

const Products = ({ addToCart }) => {
    return (
        <div>
            <h2>Produkter</h2>
            <ProductList addToCart={addToCart} />
        </div>
    );
};

export default Products;
