const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const compileRoute = require('./routes/code');

app.use(cors());

app.use(bodyParser.json());

app.use('/javascript', compileRoute);


module.exports = app;