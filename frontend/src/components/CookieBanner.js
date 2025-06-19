import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookiesAccepted');
        if (!accepted) setVisible(true);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                bgcolor: 'background.paper',
                boxShadow: 3,
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1000,
            }}
        >
            <Typography variant="body2">
                Vi använder cookies för att förbättra din upplevelse och följer GDPR.
            </Typography>
            <Button variant="contained" onClick={acceptCookies}>
                Acceptera
            </Button>
        </Box>
    );
}

export default CookieBanner;
