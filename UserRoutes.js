const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.js');
const { getAll } = require('./Controllers');

router.get("", getAll)

router.get('/:id',function (req,res){
    res.send("Bienvenu sur notre page" + req.params.id)

});

router.post('', controllers.create);

router.put('/:id', controllers(req,res));
res.send("Page d'accueil")

router.delete('/:id',function(req,res){
    res.send("Message Supprimé");
});

module.exports = router;