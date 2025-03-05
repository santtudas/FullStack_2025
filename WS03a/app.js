const express = require('express');
const app = express();
const port = 3000;          // localhost:3000
const path = require('path');
const fs = require('fs');

function logRequest(req, res, next) {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
};
app.use(logRequest);

app.use(express.json());

function checkCustomHeader(req, res, next) {
    if (!req.headers['x-custom-header']) {
        return res.status(400).json({ error: 'X-Custom-Header vaaditaan...' });
    }
    next();
};

//  Routet
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/about', (req, res) => {
    res.send("<h1> About Page </h1>");
});

app.get('/contact', (req, res) => {
    res.send("Contact Page");
});

app.get('/services', (req, res) => {
    res.send("Service Page");
});

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => {
    res.send("Service Page with POST");
});

app.get('/list', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'text.txt'));
});

app.get('/json', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'text.json'));
});

app.use('/about', checkCustomHeader);

app.post('/add', (req, res) => {
    const newUser  = req.body; // Ota uusi data request bodystä
    const filePath = path.join(__dirname, 'public', 'data.json');

    // Lue jo olemassa oleva data
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch (parseError) {
            return res.status(500).json({ error: 'Failed to parse JSON' });
        }

        // Lisää käyttäjä taulukkoon
        jsonData.users.push(newUser );

        // Lisää päivitetty data tiedostoon
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (writeErr) => {
            if (writeErr) {
                return res.status(500).json({ error: 'Failed to write data' });
            }
            res.status(201).json({ message: 'User  added successfully', user: newUser  });
        });
    });
});

// Näytä data.json sisältö routella /add
app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'data.json'));
});

// Kuuntelee porttia
app.listen (port, function() {
    console.log("Listening on port: " + port);
});