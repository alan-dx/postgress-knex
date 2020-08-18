const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/users', UserController.index);//LEMBRE DA IDEIA DE RECORTAR UM PEDAÇO DO CÓDIGO DO USERCONTROLLER E COLOCAR AQ
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

module.exports = routes;