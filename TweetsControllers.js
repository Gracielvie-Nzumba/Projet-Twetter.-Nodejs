const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { content } = req.body;
  res.status(201).json({ message: 'Message envoyé avec succès' });
});

router.get('/', (req, res) => {
  const tweets = [
    { id: 1, content: 'Pour le premier tweet' },
    { id: 2, content: 'Pour le deuxième tweet' },
  ];

  res.status(200).json(tweets);
});

const getAllTweets =(req,res) => {
  res.send(tweets);
}

const postTweet =(req,res)=>{
  res.send(newTweet)
}
const getAllTweetById=(req,res)=>{
  res.send(tweet)
}
const updateTweet =(req,res)=>{
  const tweetId=req.params.Id
  res.send(updateTweet)
}
const deleteTweet=(req,res)=>{
  const tweetId=req.params.Id
  res.send();
}

module.exports = {
  getAllTweets,
  postTweet,
  getAllTweetById,
  updateTweet,
  deleteTweet,
};



