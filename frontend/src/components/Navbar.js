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
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
                    >
                        Min Webbutik
                    </Typography>

                    <Button color="inherit" component={Link} to="/products">Produkter</Button>
                    <Button color="inherit" component={Link} to="/cart">Kundvagn</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
