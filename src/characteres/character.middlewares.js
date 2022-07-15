const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id Inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const personagem = req.body;
  if (!personagem.name || !personagem.imageUrl) {
    return res.status(400).send({ message: 'Preencha todos os campos!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
