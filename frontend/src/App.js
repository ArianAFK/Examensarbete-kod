import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  const [cartUpdated, setCartUpdated] = useState(false);

  const addToCart = (productId) => {
    fetch(`${process.env.REACT_APP_API_URL}/cart/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity: 1 })
    })
      .then(res => res.json())
      .then(() => setCartUpdated(!cartUpdated))
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart key={cartUpdated} />}
        />
      </Routes>
    </div>
  );
}

export default App;
