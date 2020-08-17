# Estudos com Banco de Dados Sequenciais, usando o DB: Postgres

npx knex init => Cria o knexfile.js (Arquivo de configuração do DB utilizado);

Na pasta database cria-se um arquivo index.js onde importa-se o knexfile e associa suas configurações com o módulo knex de fato;

MIGRATION => É o arquivo onde existe as informações de como as tabelas de seu DB SQL devem ser criadas. Além disso também mostra como deve-se adicionar itens na msm, ou seja diz como as estruturas que devem ser criadas no seu DB;

A pasta migration não pode ser simplismente movida para dentro de outra, pois o knex precisa saber qual o caminho da mesma, dessa forma torna-se necessário passar seu endereço no arquivo knexfile e dar o comando de criação da migration, pois ai sim ele criará dentro da pasta indicado no knexfile. Comando abaixo:

npx knex migrate:make create_table_users => Criando a migration que será utilizada para gerar a tabela users;

npx knex migrate:latest => Executa as últimas migrations criadas e cria as tabelas de fato;

SEEDS => É o que cria (semeia) itens dentro de cada tabela do DB previamente, muito utilizado quando se quer inicializar o DB com usuários pré-cadastrados e configurados, literalmente "semear" o DB;

npx knex seed:make 001_users => Cria o arquivo onde configura-se as linhas que deseja-se gerar na tabela. O número no início do nome do arquivo e é utilizado para que o knex siga a sequência correta de arquivos ao executá-los;

npx knex:run => Executará todas as seed's criadas;