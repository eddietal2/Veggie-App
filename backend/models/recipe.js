const mongoose = require('mongoose');

// const recipeSchema = mongoose.Schema({
//   title: String, 
//   typeOfMeal: String,
//   ingredients: {
//     ingredient: {
//       name: String,
//       quantity: Number,
//       measurement: String,
//     }
//   }
// });

const PostSchema = mongoose.Schema({
  title: String, 
  type: String,
});



module.exports = mongoose.model('Posts', PostSchema);