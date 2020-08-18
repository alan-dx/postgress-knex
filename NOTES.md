# Estudos com Banco de Dados Sequenciais, usando o DB: Postgres

npx knex init => Cria o knexfile.js (Arquivo de configuração do DB utilizado);

Na pasta database cria-se um arquivo index.js onde importa-se o knexfile e associa suas configurações com o módulo knex de fato;

MIGRATION => É o arquivo onde existe as informações de como as tabelas de seu DB SQL devem ser criadas, especificando as colunas e seus tipos de cada um. Além disso também mostra como deve-se adicionar itens na msm, ou seja diz como as estruturas que devem ser criadas no seu DB;

A pasta migration não pode ser simplismente movida para dentro de outra, pois o knex precisa saber qual o caminho da mesma, dessa forma torna-se necessário passar seu endereço no arquivo knexfile e dar o comando de criação da migration, pois ai sim ele criará dentro da pasta indicado no knexfile. Comando abaixo:

npx knex migrate:make create_table_users => Criando a migration que será utilizada para gerar a tabela users;

npx knex migrate:latest => Executa as últimas migrations criadas e cria as tabelas de fato, lembrando que ele só executa apenas as que não forma executadas ainda;

SEEDS => É o que cria (semeia) itens dentro de cada tabela do DB previamente, muito utilizado quando se quer inicializar o DB com usuários pré-cadastrados e configurados, literalmente "semear" o DB;

npx knex seed:make 001_users => Cria o arquivo onde configura-se as linhas que deseja-se gerar na tabela. O número no início do nome do arquivo e é utilizado para que o knex siga a sequência correta de arquivos ao executá-los;

npx knex:run => Executará todas as seed's criadas;

A ideia de utilizar middlewares é importante para captura de erros advindos do DB ou da própria APIs

As seed's por padrão tem uma função delete que é executada toda a vez que aquela seed for executada, por isso as vezes é necessário dar um comando para que seja executado uma seed específica. Comando abaixo:

npx knex seed:run --specific 002_projects.js => Comando espeçifico para executar uma seed espeçífica;

JOIN => É um conceito de bancos SQL, basicamente a ideia é de fazer uma busca em uma tabela a partir das informações obtidas de outra busca realizada em outra tabela previamente. JOIN = ENTRAR/BUSCAR EM OUTRA TABELA

PAGINAÇÃO => Realiza a busca por partes com base em uma parametro page passado, na primeira chamada ele retorna uma certa quantidade, quando muda o valor de page ele retorna as demais partes. Eficaz para performance;

No Header pode se tanto passar informações como retornar informações pela api;

where é tipo uma condicional

