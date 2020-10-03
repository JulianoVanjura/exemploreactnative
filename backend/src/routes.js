const express = require('express');
const ongController = require('./controllers/OngController');
const casoController = require('./controllers/CasoController');
const perfilController = require('./controllers/PerfilController');
const sessionController = require('./controllers/SessionController');


const routes = express.Router();


routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);


routes.get('/casos', casoController.index);
routes.post('/casos', casoController.create);
routes.delete('/casos/:id', casoController.delete);
routes.get('/perfil', perfilController.index);


routes.post('/session', sessionController.create);

//metodo usado para exportar uma variavel de dentro de um arquivo
module.exports = routes;