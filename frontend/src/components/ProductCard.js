import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <Card sx={{ maxWidth: 300, m: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image || 'https://via.placeholder.com/300'}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {product.price} kr
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" onClick={() => onAddToCart(product._id)}>
                    Lägg till i kundvagn
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
