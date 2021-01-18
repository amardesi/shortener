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
      // Not as fast as using an indexed DB 🚄
      return resp.data.find(item => item.shortUrl === req.params.short);
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