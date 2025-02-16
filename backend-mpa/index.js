const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let count = 0;

// Serve the MPA page
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>MPA Example</title>
        </head>
        <body>
            <h1>MPA Counter</h1>
            <p>Current Number: <span id="count">${count}</span></p>
            <form action="/update" method="POST">
                <button type="submit">Increase</button>
            </form>
        </body>
        </html>
    `);
});

// Handle form submission
app.post("/update", (req, res) => {
    count += 1;
    res.redirect("/");
});

const PORT = 4001;  // Different port from other backends
app.listen(PORT, () => {
    console.log(`MPA Backend running at http://localhost:${PORT}`);
});