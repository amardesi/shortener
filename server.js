const express = require('express');
const hostname = 'localhost';
const port = 3000;
const app = express();
const {nanoid} = require('nanoid');

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/. Here's a unique id: ${nanoid(7)}`);
    // 4.3980465111e+12 possible permutations!
});