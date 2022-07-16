const router = require('express').Router();
const userController = require('./user.controller');

router.post('/create', userController.createUserController);
router.get('/', authMiddleware, userController.findAllUserController);

module.exports = router;
