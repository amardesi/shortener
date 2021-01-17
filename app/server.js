const express = require('express');
const { host, port } = require('./shared/shared.js');
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
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/.`);
});