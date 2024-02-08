const Users = [
  {
    nom: 'Gracevie',
  },
];

const getAll = (req, res) => {
  res.render('users', { users });
};

const create = (req, res) => {
  const model = req.body;
  Users.push(model);
  getAll(req, res);
};

const update = (req, res) => {
  const model = Model.findByIdAndUpdate(req.params.id, req.body);
  res.json(model);
};

const remove = (req, res) => {
  Model.findByIdAndRemove(req.params.id);
  res.send({ message: 'Supprimé avec succès' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

