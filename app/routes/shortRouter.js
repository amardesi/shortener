const express = require('express');
const shortRouter = express.Router();
const { origin, dataUrl } = require('../shared/shared.js');
const axios = require('axios');

const success = (res, shortUrl, longUrl) => {
  res.send(JSON.stringify({ longUrl: longUrl }));
}

shortRouter.route('/:short')
.get((req, res) => {
  axios.get(`${dataUrl}/data`)
    .then(resp => {
      // We're just filtering an item out of a file.... not as fast as an indexed DB 🚄
      return resp.data.filter(item => item.shortUrl === req.params.short)[0];
    })
    .then(target => {
      target && (target.longUrl !== undefined) && (target.longUrl !== "") ?
        success(res, req.params.short, target.longUrl) :
        res.status(400).json(`${origin}/${req.params.short} cannot be found in our system.`);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = shortRouter;