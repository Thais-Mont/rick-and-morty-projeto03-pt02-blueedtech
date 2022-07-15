const mongoose = require('mongoose');

const PersonagemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Personagem = mongoose.model('Characters', PersonagemSchema);

module.exports = Personagem;
