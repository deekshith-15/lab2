const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 8002;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.post('/get-weather', (req, res) => {

    const apiUrl = `https://open-weather13.p.rapidapi.com/city/${city}`;

    const headers = {
        'X-RapidAPI-Key': 'your-api-key',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    };

    https.get(apiUrl, { headers }, (apiResponse) => {
        let data = '';

        apiResponse.on('data', (chunk) => {
            data += chunk;
        });

        apiResponse.on('end', () => {
            if (apiResponse.statusCode === 200) {
                const weatherData = JSON.parse(data);
                const temperature = weatherData.temperature;
                const description = weatherData.description;

                res.json({ temperature, description });
            } else {
                res.status(apiResponse.statusCode).send('API request failed');
            }
        });
    }).on('error', (error) => {
        res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
