const express = require('express');
const router = express.Router();
const tweetsController = require('./tweetsController');

router.get('/tweets', tweetsController.getAllTweets);
router.post('/tweets', tweetsController.createTweet);
router.get('/tweets/:id', tweetsController.getTweetById);
router.put('/tweets/:id', tweetsController.updateTweet);
router.delete('/tweets/:id', tweetsController.deleteTweet);

module.exports = router;
