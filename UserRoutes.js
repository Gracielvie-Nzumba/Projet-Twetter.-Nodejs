const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
const { getAll } = require('./Controllers');

router.get("", getAll)

router.get('/:id',(req,res){
    res.send("Bienvenu sur notre page" + req.params.id)

});

router.post('', controllers.create);

router.put('/:id', controllers.update);

router.delete('/:id', controllers.remove){
    res.send("message supprimé")
};

module.exports = router;