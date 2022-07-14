const express = require('express');
const logger = require('./middlewares/logger');
const app = express();

const port = process.env.PORT || 3000;

app.use(logger);
app.listen(port);

app.get('*', (req, res) => {
  res.status(404).send('<h1 style="color: red">404 Not Found</h1>')
});