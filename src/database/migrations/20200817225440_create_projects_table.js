
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
      table.increments('id')
      table.text('title')

      // relationshp (1 - n)
      table.integer('user_id')
        .references('users.id')//Fazendo a referência com o id dos usuários na tabela users, assim na coluna user_id ficará armazenado o id do usuárip a qual o projeto é associado
        .notNullable()
        .onDelete('CASCADE')//Fazendo isso quando o usuário for deletado, todas os seus projetos serão apagado automaticamente em "cascade"
        // .onUpdate('')//Para fazer a atualização em todos os projetos caso o usuário também sofra algum update

      table.timestamps(true, true)//Outra forma de fazer o created_at e o update_at, pelo fato de ser extremamente utilizado o knex já tras a opção como default
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects')
};
