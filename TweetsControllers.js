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

// const Users = [
//   {
//     nom: 'Gracevie',
//   },
// ];

// const getAll = (req, res) => {
//   res.render('users', { users });
// };

// const create = (req, res) => {
//   const model = req.body;
//   Users.push(model);
//   getAll(req, res);
// };

// const update = (req, res) => {
//   const model = Model.findByIdAndUpdate(req.params.id, req.body);
//   res.json(model);
// };

// const remove = (req, res) => {
//   Model.findByIdAndRemove(req.params.id);
//   res.send({ message: 'Supprimé avec succès' });
// };



