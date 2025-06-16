const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

const router = express.Router();

// Hämta kundvagnen (antag en enda kundvagn – enkelt demo)
router.get('/', async (req, res) => {
    try {
        let cart = await Cart.findOne({}).populate('items.product');
        if (!cart) {
            cart = new Cart({ items: [] });
            await cart.save();
        }
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Lägg till produkt i kundvagn
router.post('/add', async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        let cart = await Cart.findOne({});
        if (!cart) {
            cart = new Cart({ items: [] });
        }

        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
        if (itemIndex > -1) {
            // Uppdatera kvantitet
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }
        await cart.save();
        cart = await cart.populate('items.product');
        res.json(cart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Ta bort produkt från kundvagn
router.post('/remove', async (req, res) => {
    const { productId } = req.body;
    try {
        const cart = await Cart.findOne({});
        if (!cart) {
            return res.status(404).json({ message: 'Kundvagn ej hittad' });
        }
        cart.items = cart.items.filter(item => item.product.toString() !== productId);
        await cart.save();
        const populatedCart = await cart.populate('items.product');
        res.json(populatedCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
