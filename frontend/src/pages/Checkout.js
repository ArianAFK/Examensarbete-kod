import React, { useState } from 'react';
import paymentOptions from '../mock/paymentOptions';
import {
    Typography, RadioGroup, FormControlLabel, Radio,
    Button, Container, Paper, Box
} from '@mui/material';

function Checkout({ cart, onOrderPlaced }) {
    const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0].id);

    const handleOrder = () => {
        // Här kan du lägga till logik för att skicka order till servern
        fetch(`${process.env.REACT_APP_API_URL}/cart/clear`, { method: 'POST' }) // Töm vagnen
            .then(() => onOrderPlaced())
            .catch(err => console.error('Fel vid orderläggning:', err));
    };

    const selectedInfo = paymentOptions.find(opt => opt.id === selectedPayment);

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>Välj betalningsmetod</Typography>
                <RadioGroup
                    value={selectedPayment}
                    onChange={e => setSelectedPayment(e.target.value)}
                >
                    {paymentOptions.map(option => (
                        <FormControlLabel
                            key={option.id}
                            value={option.id}
                            control={<Radio />}
                            label={option.name}
                        />
                    ))}
                </RadioGroup>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">{selectedInfo.description}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {selectedInfo.dataHandling}
                    </Typography>
                    <Typography variant="caption">
                        {selectedInfo.gdpr}
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3 }}
                    onClick={handleOrder}
                >
                    Slutför beställning
                </Button>
            </Paper>
        </Container>
    );
}

export default Checkout;
