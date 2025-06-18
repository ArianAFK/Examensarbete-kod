import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Grid, Container, Typography } from '@mui/material';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                Våra produkter
            </Typography>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item key={product._id}>
                        <ProductCard product={product} onAddToCart={addToCart} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;
