import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 4 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Min Webbutik
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Produkter</Button>
                    <Button color="inherit" component={Link} to="/cart">Kundvagn</Button>
                    <Button color="inherit" component={Link} to="/about">Om</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
