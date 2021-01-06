const { json } = require('express');
var express = require('express');
const db = require('monk')('localhost:27017/learndb')
var router = express.Router();

const movies = db.get('movies') 

/* GET home page. */

/* router.get('/:slug?', async function(req, res, next) {
  const movieScore = req.params.slug;
  const movieName = req.params.slug;
  const result = await movies.insert({ name: movieName , score: movieScore })
  res.json({'result':result})
  //const movieScore = req.query.score;
  //const movieName = req.params.slug;
  //console.log(req.query);
  const rat = await movies.find({ score:movieScore });
  res.json({'movie':rat});
  });  */
 
 //QUERY If
  
router.get('/:slug', async function(req, res, next) {
    const movieName = req.params.slug;
    console.log(req.query);
    const movieScore = req.query.score;
    if( movieScore != null){
    const movie = await movies.find({  name:movieName, score:movieScore });
    res.json({'movie':movie});
    }
    else{
    const movie = await movies.find({ name: movieName});
    res.json({ 'movie':movie});
    }
  }); 

/*router.get('/:slug', async function(req, res, next) {
    const movieName = req.params.slug;
    console.log(req.query);
    const movieScore = req.query.score;
    const movie = await movies.find({ name: movieName });
    res.json({ 'movie':movie});
});  */


/* INSERT DATABASE

router.get('/:slug/:rating', async function(req, res, next) {
  

  const movieName = req.params.slug;
  const movieScore = req.params.rating;
 

  const result = await movies.insert({ name: movieName , score: movieScore })
  res.json({'result':result})
  //const movieScore = req.query.score;
  //const movieName = req.params.slug;
  //console.log(req.query);
 
  //const rat = await movies.find({ score:movieScore });
  //res.json({'movie':rat});
  });

 */

//SCORE YAZ GELSİN 

/*   router.get('/:slug', async function(req, res, next) {
    const movieScore = req.params.slug;
    const movieName = req.params.slug;
    const rating = await movies.find({ score:movieScore });
    res.json({'rating':rating});
  }); */



  //QUERY
  
/*   router.get('/:slug', async function(req, res, next) {
    const movieName = req.params.slug;
    console.log(req.query);
    const movieScore = req.query.score;
    const movie = await movies.find({ name: movieName });
    res.json({ 'movie':movie});
    });  */

    /*  POST

  router.post('/:slug', async function(req, res, next) {
    const request_info = req.body;
    console.log(request_info);
     const result = await movies.insert({ name: request_info.name , score:request_info.score })
   res.json({'result':result})
 }); 
 */


module.exports = router;
