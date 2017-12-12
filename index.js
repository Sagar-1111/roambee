const express = require('express');
const morgan = require('morgan');
const resultRoutes = require('./routes/results');
const app = express();
app.use(morgan('dev'))
resultRoutes(app);

app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
});

app.listen('3003', () => {
  console.log('server started on port 3003');
});

module.exports = app;
