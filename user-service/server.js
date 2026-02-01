const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Sample user data
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'User' }
];

app.get('/', (req, res) => {
    res.send({ message: 'User Service is running', status: 'OK' });
});

app.get('/users', (req, res) => {
    console.log('Received request for /users');
    res.json(users);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`User Service running at http://0.0.0.0:${port}`);
});
