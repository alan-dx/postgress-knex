const { onUpdateTrigger } = require('../../../knexfile')

exports.up = async function(knex) {//Executa o que foi solicitado para criar uma tabela ou um DB
    return knex.schema.createTable('users', function(table) {
        table.increments('id')
        table.text('username').unique().notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    }).then(() => knex.raw(onUpdateTrigger('users')))
};

exports.down = async function(knex) {//Deleta o que foi solicitados
  return knex.schema.dropTable('users')
};
