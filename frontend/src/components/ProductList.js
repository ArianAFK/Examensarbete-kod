import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList({ addToCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('${process.env.REACT_APP_API_URL}/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Produkter</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Pris: {product.price} kr</p>
                        <button onClick={() => addToCart(product._id)}>Lägg till i kundvagn</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
