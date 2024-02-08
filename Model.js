const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nom: String,
  prenom: String,
  age: Number,
  email: String
});

const Model = mongoose.model('Model', schema);

module.exports = Model;