const router = require('express').Router();
const controllerPersonagens = require('../characteres/character.controller');
const { validId, validObjectBody } = require('./character.middlewares');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/', controllerPersonagens.findAllPersonagensController);

router.get(
  '/find/:id',
  validId,
  controllerPersonagens.findByIdPersonagemController,
);
router.post(
  '/create',
  validObjectBody,
  controllerPersonagens.createPersonagemController,
);
router.put(
  '/update/:id',
  validId,
  validObjectBody,
  controllerPersonagens.updatePersonagemController,
);
router.delete(
  '/delete/:id',
  validId,
  controllerPersonagens.deletePersonagemController,
);

router.get(
  '/search',
  validObjectBody,
  controllerPersonagens.searchPersonagemController,
);

module.exports = router;
