import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartUpdated, setCartUpdated] = useState(false);

  const addToCart = (productId) => {
    fetch('http://localhost:5000/api/cart/add', {
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
      <h1>Min Webbutik</h1>
      <ProductList addToCart={addToCart} />
      <Cart key={cartUpdated} />
    </div>
  );
}

export default App;
