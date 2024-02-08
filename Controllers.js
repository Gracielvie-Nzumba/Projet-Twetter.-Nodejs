const Users =[{
  nom: 'Gracevie',
}]

const getAll = (req, res) => {
  res.render('users',{users});
};

const create = (req, res) => {
  const model = new Users(req.body);
  res.render(model);
};

module.exports = {
  getAll,create
  // getById,
  // create,
  // update,
  // remove,
};
// const update = async (req, res) => {
//   const model = await Model.findByIdAndUpdate(req.params.id, req.body);
//   res.json(model);
// };

// const remove = async (req, res) => {
//   await Model.findByIdAndRemove(req.params.id);
//   res.json({ message: 'Supprimé avec succès' });
// };