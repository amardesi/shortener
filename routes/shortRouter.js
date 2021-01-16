const express = require('express');
const shortRouter = express.Router();

shortRouter.route('/:short')
.get((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Will look for ${req.params.short} and do the redirect if found.}`);
});

module.exports = shortRouter;