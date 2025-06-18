import React, { useEffect, useState } from 'react';
import { Typography, Grid, Container } from '@mui/material';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Kunde inte hämta produkter:', err));
    }, []);

    const handleAddToCart = (productId) => {
        fetch(`${process.env.REACT_APP_API_URL}/cart/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, quantity: 1 })
        })
            .then(res => res.json())
            .then(() => console.log('Produkt tillagd'))
            .catch(err => console.error(err));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                Välkommen till vår webbutik!
            </Typography>
            <Typography variant="body1" gutterBottom>
                Här hittar du våra senaste produkter.
            </Typography>

            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item key={product._id}>
                        <ProductCard product={product} onAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
