const express = require('express');
const port = 3000;
const tweetsController = require('./tweetsController');
const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue sur notre Site !');
});

app.use(express.json());
app.use('/tweets', tweetsController);


app.listen(port, () => {
  console.log('Serveur en écoute sur le port 3000');
});






