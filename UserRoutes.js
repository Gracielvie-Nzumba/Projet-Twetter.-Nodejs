const express = require('express');
const router = express.Router();
const tweetsController = require('./tweetsController');

router.get('/tweets', tweetsController.getAllTweets);
router.post('/tweets', tweetsController.createTweet);
router.get('/tweets/:id', tweetsController.getTweetById);
router.put('/tweets/:id', tweetsController.updateTweet);
router.delete('/tweets/:id', tweetsController.deleteTweet);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const controllers = require('../controllers/controllers.js');
// const { getAll } = require('./TweetsControllers.js');

// router.get("", getAll)

// router.get('/:id',function (req,res){
//     res.send("Bienvenu sur notre page" + req.params.id)

// });

// router.post('', controllers.create);

// router.put('/:id', controllers(req,res));
// res.send("Page d'accueil")

// router.delete('/:id',function(req,res){
//     res.send("Message Supprimé");
// });

// module.exports = router;