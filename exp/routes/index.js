const { json } = require('express');
var express = require('express');
const db = require('monk')('localhost:27017/learndb')
var router = express.Router();

const movies = db.get('movies') 

/* GET home page. */
router.get('/:slug?', async function(req, res, next) {
  const movieName = req.params.slug;
  console.log(req.query);
  const movieScore = req.query.score;
  const movie = await movies.find({ name: movieName,score:movieScore });
  res.json({'movie':movie});
  });


router.post('/:slug', async function(req, res, next) {
  const request_info = req.body;
  console.log(request_info);
  const result = await movies.insert({ name: request_info.name , score:request_info.score })
  res.json({'result':result})
 });



module.exports = router;
