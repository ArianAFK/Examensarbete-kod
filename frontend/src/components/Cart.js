import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {
    const [cart, setCart] = useState({ items: [] });

    const fetchCart = () => {
        axios.get('http://localhost:5000/api/cart')
            .then(res => setCart(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const removeFromCart = (productId) => {
        axios.post('http://localhost:5000/api/cart/remove', { productId })
            .then(res => setCart(res.data))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h2>Kundvagn</h2>
            {cart.items.length === 0 ? (
                <p>Kundvagnen är tom</p>
            ) : (
                <ul>
                    {cart.items.map(item => (
                        <li key={item.product._id}>
                            {item.product.name} - Antal: {item.quantity}
                            <button onClick={() => removeFromCart(item.product._id)}>Ta bort</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
