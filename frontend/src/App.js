import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';

function App() {
  const [cartUpdated, setCartUpdated] = useState(false);
  const [cart, setCart] = useState({ items: [] });

  // Hämta kundvagnen från API
  const fetchCart = () => {
    fetch(`${process.env.REACT_APP_API_URL}/cart`)
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.error('Fel vid hämtning av kundvagn:', err));
  };

  useEffect(() => {
    fetchCart();
  }, [cartUpdated]);

  // Lägg till produkt i kundvagn
  const addToCart = (productId) => {
    fetch(`${process.env.REACT_APP_API_URL}/cart/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity: 1 })
    })
      .then(res => res.json())
      .then(() => setCartUpdated(prev => !prev))
      .catch(err => console.error('Fel vid tillägg till kundvagn:', err));
  };

  // När beställning har lagts
  const handleOrderPlaced = () => {
    alert('Tack för din beställning!');
    setCartUpdated(prev => !prev); // uppdatera så kundvagnen töms
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart key={cartUpdated} />} />
        <Route path="/checkout" element={<Checkout cart={cart} onOrderPlaced={handleOrderPlaced} />} />
      </Routes>
    </div>
  );
}

export default App;
