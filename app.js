const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const { authentificate } = require('passport');
const port = 3000;
const app = express();

// app.use(express.json())

const tweets = [
  {
    id: 1,
    title: 'mon poste',
    name: 'joe',
    like: '100',
    Comment: "c'est pas mal",
  },
  {
    id: 2,
    title: 'mon poste',
    name: 'james',
    like: '100',
    Comment: "c'est pas mal",
  },
  {
    id: 3,
    title: 'mon poste',
    name: 'gracevie',
    like: '100',
    Comment: "c'est pas mal",
  },
];

app.get('/', (req, res) => {
  res.status(200).send(tweets);
});

app.get('/:id', (req, res) => {
  const ID = parseInt(req.params.id);

  res.send(
    tweets.filter((e) => {
      return e.id === ID;
    })
  );
});
app.use(express.json());

app.post('/post', (req, res) => {
  tweets.push(req.body);
  res.send('poste ajouté avec succès ');
});

app.put('/update/:id', (req, res) => {
  const tweetId = req.params.id;
  tweets.splice(tweetId - 1, 1, req.body);
  res.send("le poste dont l'Id vaut " + tweetId + ' a été modifié avec succès');
});

app.delete('/:id', (req, res) => {
  const tweetId = req.params.id;
  tweets.splice(tweetId - 1, 1);
  res.send('poste dont ID vaut ' + tweetId + ' a été supprimé avec succès');
});

// Authentification

const codeKey = 'Mot de passe';
const users = [
  { id: 1, username: 'Sepho', password: '12345678' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res
      .status(401)
      .json('utilisateur non défini ou Mot de passe invalide');
  }

  const token = jwt.sign({ id: user.id }, codeKey, { expiresIn: '1h' });
  res.json({ token });
});

function authMiddleware(req, res, next) {
  const token = req.headers.authorisation;
  if (!token) {
    return res.status(401).json({ message: 'Token manquant' });
  }
  jwt.verify(token, codeKey, (err, decoded)=> {
    if(err) {
      return res.status(401).json({message: 'Token invalide'});
    }
    req.id = decoded.id

    next();
  })
}

app.get('/protected', authMiddleware,(req,res) =>{
  res.json({message: 'Accès autorisé'})
});


app.listen(port, () => {
  console.log('Serveur en écoute sur le port 3000');
});
