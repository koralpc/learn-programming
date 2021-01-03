const { json } = require('express');
var express = require('express');
const db = require('monk')('localhost:27017/learndb')
var router = express.Router();

const movies = db.get('movies') 

/* GET home page. */
router.get('/:slug', async function(req, res, next) {
  const movieName = req.params.slug 
  movies.insert({ name: movieName, 'score': 8.5})
  const movie = await movies.find({ name: movieName });
  console.log(movie);
  res.json({'movie':movie})
  });

//  router.get('/', async function(req, res, next) {
//   pezos.insert({ name: 'yigit'})
//   const user = await pezos.find({ name: 'yigit' });
//   console.log(user);
//   res.json({'user':user})
//  });

module.exports = router;
