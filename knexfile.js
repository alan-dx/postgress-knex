// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      // filename: './dev.sqlite3', configuração para sqlite3, o mesmo não cria um db na máquina, mas sim um arquivo dentro do próprio projeto
      database: "knex_test",
      user: "postgres",
      password: "0000"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
