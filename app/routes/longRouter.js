const express = require('express');
const { origin, dataUrl } = require('../shared/shared.js');
const longRouter = express.Router();
const {nanoid} = require('nanoid');
const axios = require('axios');

const success = (res, short, longUrl) => {
  res.send(JSON.stringify({ "short": short, "longUrl": longUrl }));
}

longRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.post((req, res) => {
  const uniqueStub = nanoid(7);    // 4.3980465111e+12 possible permutations!
  axios.post(`${dataUrl}/data`, { short: uniqueStub, longUrl: req.body.longUrl })
  .then(dataResp => {
    success(res, `${origin}/${uniqueStub}`, dataResp.data.longUrl);
  })
  .catch(err => {
    console.log(err);
  });

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