const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');
require('dotenv/config'); // ***


// Import Routes
const recipeRoute = require('./routes/recipes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/recipes', recipeRoute);

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('connected to DB!')
})

app.listen(3000);

