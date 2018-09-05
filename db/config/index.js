require('dotenv').config();

const mongoose = require('mongoose');

const URI = process.env.DB_URI;

mongoose.connect(URI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('connected to database');
});

module.exports = {
  db: db
};
