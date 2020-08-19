const knex = require("../database");

module.exports = {//Exporta diretamente como objeto
    async index(req,res) {
        const results = await knex('users')//Poderia utilizar o then() e o catch() sem usar o await e async
        .where('deleted_at', null)//Onde deleted_at for nulo

        return res.json(results);
    },
    async create(req, res, next) {

        try {
            const { username } = req.body;
        
            await knex('users').insert({
                username
            })

            res.status(201).send();
            
        } catch (error) {
            next(error)
        }
        //58:17
    },
    async update(req, res, next) {
        try {

            const { username } = req.body
            const { id } = req.params
            
            await knex('users')
            .update({ username })
            .where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('users')
            .where({ id })
            .update('deleted_at', new Date())
            

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}