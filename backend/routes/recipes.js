const express = require('express');
const router = express.Router();
const Post = require('../models/recipe');

router.get('/', (req, res) => {
  res.send('We are on Recipes');
});

router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    type: req.body.type
  });

  post.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json("lol")
    });
});

module.exports = router;