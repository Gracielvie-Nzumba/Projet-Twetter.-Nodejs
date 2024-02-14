const express = require('express');
const port = 3000;
const app = express();


const tweets=[
  {
    id:1,
    title:"mon poste",
    name:"joe",
    like:"100",
    Comment:"c'est pas mal"
  },
  {
    id:2,
    title:"mon poste",
    name:"james",
    like:"100",
    Comment:"c'est pas mal"
  },
  {
    id:3,
    title:"mon poste",
    name:"gracevie",
    like:"100",
    Comment:"c'est pas mal"
  }
]

app.get('/', (req, res) => {
  res.status(200).send(tweets);
});

app.get('/:id', (req, res) => {
  const ID= parseInt(req.params.id)
 
  res.send( tweets.filter((e)=>{
    return e.id===ID
  }))
});
app.use(express.json())

app.post('/post',(req,res) =>{
   tweets.push(req.body)
   res.send("poste ajouté avec succès ")
});

app.put('/update/:id', (req, res) => {
  const  tweetId= req.params.id
  tweets.splice(tweetId-1,1,req.body)
  res.send("le poste dont l'Id vaut " +tweetId+ " a été modifié avec succès")

});

app.delete('/:id', (req, res) => {

  const tweetId = req.params.id;
  tweets.splice(tweetId-1,1)
  res.send("poste dont ID vaut "+ tweetId+ " a été supprimé avec succès" )

});

app.listen(port, () => {
  console.log('Serveur en écoute sur le port 3000');
});






