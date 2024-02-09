const getAllTweets =(req,res) => {
  res.send(tweets);
}

const createTweet =(req,res)=>{
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
  createTweet,
  getAllTweetById,
  updateTweet,
  deleteTweet,
};


