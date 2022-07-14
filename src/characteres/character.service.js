const Personagens = require('./Character');

const findAllPersonagensService = async () => {
  const allPersonagens = await Personagens.find();
  return allPersonagens;
};

const findByIdPersonagemService = async (idParam) => {
  const onePersonagem = await Personagens.findById(idParam);
  return onePersonagem;
};

const createPersonagemService = async (newPersonagem) => {
  const createdPersonagem = await Personagens.create(newPersonagem);
  return createdPersonagem;
};

const updatePersonagemService = async (idParam, editPersonagem) => {
  const updatePersonagem = await Personagens.findByIdAndUpdate(idParam, editPersonagem);
  return updatePersonagem;
};

const deletePersonagemService = async (idParam) => {
  return await Personagens.findByIdAndDelete(idParam);
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
