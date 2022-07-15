const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginService(email);

  if (!user) {
    return res.status(400).send({ message: 'Usuário não encontrado!' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send({ message: 'Senha Inválida' });
  }
  res.send(user);
};

module.exports = { loginController };
