const express = require('express');
import { expressHost, expressPort } from '../shared/shared';
export const expressHost = 'http://localhost';
export const expressPort = 3000;
export const dataUrl = 'http://localhost:3001/';
const hostname = 'localhost';
const port = 3000;
const app = express();
const morgan = require('morgan');
const longRouter = require('./routes/longRouter');
const shortRouter = require('./routes/shortRouter');

app.use(morgan('common'));
app.use(express.json());

app.use('/long', longRouter);
app.use('/', shortRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/.`);
});