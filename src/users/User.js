const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true, //usuário unico
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true, //usuário unico
    lowercase: true //deixando todo o email em letra minúscula
  },
  password: {
    type: String,
    required: true,
    select: false, //na resposta da requisição ele não mostra pro usuário
  },
  avatar: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
