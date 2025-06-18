import React, { useState } from 'react';
import { Container, Typography, RadioGroup, FormControlLabel, Radio, Button, Box } from '@mui/material';

function Checkout({ cart, onOrderPlaced }) {
    const [paymentMethod, setPaymentMethod] = useState('card'); // default payment method

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handlePlaceOrder = () => {
        alert(`Order lagd med betalningsmetod: ${paymentMethod}`);
        onOrderPlaced(); // t.ex. rensa kundvagnen eller visa bekräftelse
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                Välj betalningsmetod
            </Typography>
            <RadioGroup value={paymentMethod} onChange={handlePaymentChange}>
                <FormControlLabel value="card" control={<Radio />} label="Kortbetalning (Visa/MasterCard)" />
                <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                <FormControlLabel value="invoice" control={<Radio />} label="Faktura (Betala senare)" />
            </RadioGroup>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handlePlaceOrder}>
                    Lägg order
                </Button>
            </Box>
        </Container>
    );
}

export default Checkout;
