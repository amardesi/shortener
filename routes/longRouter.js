const express = require('express');
const longRouter = express.Router();
const {nanoid} = require('nanoid');

longRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.post((req, res) => {
  res.end(`Will assign long URL: ${req.body.longUrl} \
  \nto a short e.g. http://${req.hostname}:${req.socket.address().port}/${nanoid(7)}`);
  // 4.3980465111e+12 possible permutations!
})
.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /long');
})
.delete((req, res) => {
  res.statusCode = 403;
  res.end('DELETE operation not supported on /long');
});

module.exports = longRouter;