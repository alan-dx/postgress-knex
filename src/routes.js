const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');

routes
    // Users
    .get('/users', UserController.index)//LEMBRE DA IDEIA DE RECORTAR UM PEDAÇO DO CÓDIGO DO USERCONTROLLER E COLOCAR AQ
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    // Projects
    .get('/projects', ProjectController.index)
    .post('/projects', ProjectController.create)

module.exports = routes;