import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


function Cart() {
    const [cart, setCart] = useState({ items: [] });

    const fetchCart = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/cart`)
            .then(res => setCart(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return; // Kan inte gå under 1
        axios.put(`${process.env.REACT_APP_API_URL}/cart/update`, { productId, quantity: newQuantity })
            .then(res => setCart(res.data))
            .catch(err => console.error(err));
    };

    const removeFromCart = (productId) => {
        axios.post(`${process.env.REACT_APP_API_URL}/cart/remove`, { productId })
            .then(res => setCart(res.data))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h2>Kundvagn</h2>
            {cart.items.length === 0 ? (
                <p>Kundvagnen är tom.</p>
            ) : (
                <ul>
                    {cart.items.map(item => (
                        <li key={item.product._id} style={{ marginBottom: '1rem' }}>
                            <strong>{item.product.name}</strong> — Pris: {item.product.price} kr — Antal:
                            <button
                                onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                style={{ marginLeft: '10px', marginRight: '5px' }}
                            >
                                –
                            </button>
                            {item.quantity}
                            <button
                                onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                                style={{ marginLeft: '5px', marginRight: '10px' }}
                            >
                                +
                            </button>
                            <button onClick={() => removeFromCart(item.product._id)} style={{ color: 'red' }}>
                                Ta bort
                            </button>
                            <Button
                                variant="contained"
                                color="primary"
                                component={Link}
                                to="/checkout"
                                sx={{ mt: 2 }}
                            >
                                Gå till kassan
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
