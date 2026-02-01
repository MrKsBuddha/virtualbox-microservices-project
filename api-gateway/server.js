const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Service URLs (configured for the VirtualBox network)
const USER_SERVICE_URL = 'http://192.168.56.105:3001';
const PRODUCT_SERVICE_URL = 'http://192.168.56.104:3002';

app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.send({ message: 'API Gateway is running', status: 'OK' });
});

// Proxy to User Service
app.get('/users', async (req, res) => {
    try {
        console.log(`Forwarding request to User Service at ${USER_SERVICE_URL}/users`);
        const response = await axios.get(`${USER_SERVICE_URL}/users`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ error: 'Service Unavailable', details: error.message });
        }
    }
});

// Proxy to Product Service
app.get('/products', async (req, res) => {
    try {
        console.log(`Forwarding request to Product Service at ${PRODUCT_SERVICE_URL}/products`);
        const response = await axios.get(`${PRODUCT_SERVICE_URL}/products`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ error: 'Service Unavailable', details: error.message });
        }
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`API Gateway running at http://0.0.0.0:${port}`);
});
