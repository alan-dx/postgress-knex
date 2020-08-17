const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/users', UserController.index);//LEMBRE DA IDEIA DE RECORTAR UM PEDAÇO DO CÓDIGO

module.exports = routes;