const knex = require("../database")

module.exports = {
    async index(req,res) {
        const results = await knex('users')//Poderia utilizar o then() e o catch() sem usar o await e async

        return res.json(results);
    }
}