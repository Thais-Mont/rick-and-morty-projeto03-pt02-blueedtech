const User = require('./User');

const findByEmailUserService = (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

const findAllUserService = () => User.find();

const findByIdUser = async (userId) => await User.findById(userId);


module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService,
  findByIdUser
};
