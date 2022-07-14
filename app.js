const express = require('express');
const logger = require('./middlewares/logger');
const notFound = require('./routes/*/*');
const blogs = require('./routes/blogs/blogs');
const app = express();

const port = process.env.PORT || 3000;

app.use(logger);
app.listen(port);

//routes: 
app.use('/blogs', blogs);
app.use('*', notFound);