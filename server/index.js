require('dotenv').config();

const express = require('express');
const path = require('path');
const parser = require('body-parser');
const helmet = require('helmet');

const { db } = require('../db/config');

const app = express();

const PORT = process.env.PORT;

// Middleware for security
app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));

app.get('/', (req, res) => res.send('Hello World'));

app.listen(PORT, err => {
  if (err) {
    console.log('error connecting to host: ', PORT);
  }
  console.log(`connected on PORT: ${PORT}`);
});
