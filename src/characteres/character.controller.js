const personagensService = require('./character.service');

const findAllPersonagensController = async (req, res) => {
  const allpersonagens = await personagensService.findAllPersonagensService();
  console.log(allpersonagens);
  if (allpersonagens.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existem personagens cadastrados!' });
  }
  res.send(allpersonagens);
};

const findByIdPersonagemController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPersonagem = await personagensService.findByIdPersonagemService(
    idParam,
  );
  if (!chosenPersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrado' });
  }
  res.send(chosenPersonagem);
};

const createPersonagemController = async (req, res) => {
  const personagem = req.body;
  const newPersonagem = await personagensService.createPersonagemService(
    personagem,
  );
  res.status(201).send(newPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  const editPersonagem = req.body;
  const updatedPersonagem = await personagensService.updatePersonagemService(
    idParam,
    editPersonagem,
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  await personagensService.deletePersonagemService(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

const searchPersonagemController = async (req, res) => {
    const { name } = req.query.name;
  
    const personagens = await personagensService.searchPersonagemService(name);
  
    if (personagens.length === 0) {
      return res
        .status(400)
        .send({ message: "Não existem personagens com esse nome!" });
    }
  
    return res.send({
      tweets: personagens.map((personagem) => ({
        id: personagem._id,
        name: personagem.user.name,
        avatar: personagem.user.avatar,
      })),
    });
  };

module.exports = {
  findAllPersonagensController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
  searchPersonagemController,
};
