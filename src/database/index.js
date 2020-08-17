const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile.development);//Passando as configurações feitas no knexfile para o módulo knex de fato

module.exports = knex;