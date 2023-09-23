const routes = require('express').Router();
const baseController = require('../controllers/index')

routes.use('/contacts', require('./contacts'))

module.exports = routes;