const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

UserSchema.pre('save', async function(next){
  this.password = await bcrypt.hash(this.password, 10);
	next();
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;
