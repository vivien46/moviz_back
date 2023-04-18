var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/movies', (req,res) =>{

fetch (
  `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MY_API_KEY}`
)
  .then((res) => res.json())
  .then((data) => {
    res.json({movies: data.results});
  });
});

module.exports = router;
