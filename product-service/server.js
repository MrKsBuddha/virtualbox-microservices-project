const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

// Sample product data
const products = [
    { id: 101, name: 'Wireless Mouse', price: 29.99, category: 'Electronics' },
    { id: 102, name: 'Mechanical Keyboard', price: 89.99, category: 'Electronics' },
    { id: 103, name: 'HD Monitor', price: 199.99, category: 'Electronics' },
    { id: 104, name: 'Ergonomic Chair', price: 149.99, category: 'Furniture' }
];

app.get('/', (req, res) => {
    res.send({ message: 'Product Service is running', status: 'OK' });
});

app.get('/products', (req, res) => {
    console.log('Received request for /products');
    res.json(products);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Product Service running at http://0.0.0.0:${port}`);
});
