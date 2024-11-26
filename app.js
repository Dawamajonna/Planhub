
    const express = require('express');
    const app = express();

    app.use(express.json());
    app.use(express.static('public'));

    // Basic route for the homepage
    app.get('/', (req, res) => {
        res.send('Welcome to AfricaHubPlan API');
    });

    // Mock data route for property listings
    app.get('/api/properties', (req, res) => {
        const properties = [
            { id: 1, title: 'Luxury Villa in Nairobi', location: 'Nairobi', price: '500,000' },
            { id: 2, title: 'Apartment in Cape Town', location: 'Cape Town', price: '300,000' }
        ];
        res.json(properties);
    });

    app.listen(5000, () => {
        console.log('Server running on port 5000');
    });
    