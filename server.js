const express = require('express');
const hostname = 'localhost';
const port = 3000;
const app = express();
const {nanoid} = require('nanoid');
const morgan = require('morgan');

app.use(morgan('common'));
app.use(express.json());

app.use(function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain')
  next();
});

app.get('/:short', (req, res) => {
  res.end(`Will look for ${req.params.short} and do the redirect if found.}`);
});

app.post('/long', (req, res) => {
  res.end(`Will assign long URL: ${req.body.longUrl}\nto a short, e.g. http://${hostname}:${port}/${nanoid(7)}`);
});

app.put('/long', (req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /long');
});

app.delete('/long', (req, res) => {
  res.statusCode = 403;
  res.end('DELETE operation not supported on /long');
});

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/.`);
    // 4.3980465111e+12 possible permutations!
});