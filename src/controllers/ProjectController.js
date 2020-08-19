const knex = require("../database");
const { create } = require("./UserController");

module.exports = {//Exporta diretamente como objeto
    async index(req,res,next) {
        try {
            const { user_id, page = 1 } = req.query;//page recebeu um valor default = 1, para ser associado caso n seja enviado nenhum valor
            const query = knex('projects')//Poderia utilizar o then() e o catch() sem usar o await e async, mas SEM o await pois pode haver o tratamento
            .limit(5)//Definindo o limte de quantos itens devem ser retornandos
            .offset((page - 1) * 5)//Definindo um offset para deslocar as demais páginas, como na primeira chamada page = 1 ele chama apenas 5 itens na primeira vez, o msm acontece caso n seja passado p parâmetro page

            const countObj = knex('projects').count()//Contando quantos projetos existem, mas SEM o await pois pode haver o tratamento

            if (user_id) {//Continuando a query, ou seja tratando uma busca, caso exista o user_id. Se não for mandando ao user_id na query ele retorna todoos os projetos
                query
                    .where({ user_id: user_id })
                    .join('users', 'users.id', '=', 'projects.user_id')//(NOME_DA_TABELA, CONDICIONAL_DE_BUSCA) TRADUÇÃO = ENTRE NA TABELA USERS E BUSQUE TODAS AS INFORMAÇÕES EM QUE A SEGUINTE CONDIÇÃO SEJA VERDADEIRA: COLUNA ID DA TABELA USERS SEJA IGUAL A COLUNA USER.ID DA TABELA PROJECTS
                    .select('projects.*', 'users.username')//SELECIONE TUDO DA TABELA PROJECT E APENAS O USERNAME DA TABELA USERS
                    .where('users.deleted_at', null)

                    countObj.where({ user_id })//where é tipo uma condicional, vai contar apenas os projetos com o user_id passado
            }

            const [count] = await countObj
            res.header('X-Total-Count', count["count"])

            const results = await query

            return res.json(results);
        } catch (error) {
            next(error)
        }
        //1:33:51
    },
    async create(req,res,next) {
        try {
            const {title, user_id} = req.body

            await knex('projects').insert({
                title,
                user_id
            })

            res.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}
