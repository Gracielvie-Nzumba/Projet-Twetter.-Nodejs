const express = require('express');
const app = express();
const port = 3000;
// const routes = require('./routes');

// app.use('/', routes);
app.get('/', (req, res) => {
  res.send('Bienvenue sur notre Site !');
});

app.listen(port, () => {
  console.log('Serveur en écoute sur le port 3000');
});
// console.log("hui");
// const express = require('express');
// const mongoose = require('mongoose');
// const routes = require('./routes');
// const port = 3000;

// const app = express();

// // mongoose.connect('mongodb://localhost:27017/database', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // });

// app.set()
// app.set()
// app.use(express.urlencoded({extended:true}));
// app.use('/Users',Users)
// app.use('/Model', Model);

// app.listen(3000, () => {
//   console.log("Serveur en cours d'exécution sur le port 3000");
// });
