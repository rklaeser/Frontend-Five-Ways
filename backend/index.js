const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let number = 0;

app.get('/number', (req, res) => {
    res.json({ number });
});

app.post('/update', (req, res) => {
    number += 1;
    res.json({ number });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});

module.exports = app; // Add this line to export the app for testing