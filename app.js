const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur notre Site !');
});

app.listen(port, () => {
  console.log('Serveur en écoute sur le port 3000');
});

