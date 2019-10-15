const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  title: String, 
  typeOfMeal: String,
  ingredients: {
    ingredient: {
      name: String,
      quantity: Number,
      measurement: String,
    }
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);