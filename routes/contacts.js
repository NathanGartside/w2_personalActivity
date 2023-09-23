const routes = require('express').Router();
const baseController = require('../controllers/index')

routes.get('/', baseController.getAll);

routes.get('/:id', baseController.getSingle);

module.exports = routes;