const knex = require('knex');
const configuration = require('../../knexfile');

//usa a configuração mais adequanda, se estiver em estado de dev usar a development
const connection = knex(configuration.development);

module.exports = connection;
