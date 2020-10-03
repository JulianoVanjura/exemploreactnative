const { request, response, query } = require('express');
//armazena as bibliotecas
const express = require('express');
const routes = require("./routes");
const cors = require('cors');



//armazena a minha aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP
 * GET: busca uma informação do back-end
 * POST: criar uma informação no back-end
 *  PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 * 
 */

 /**
  * Tipos de Parametros:
  * 
  * Query: parametros nomeados enviados na rota após o simbolo de "?" (filtros, paginação)
  * Route Params: Parametros usados para identificar recursos
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  * 
  */






//mandar a app ouvir na porta 3333
app.listen(3333);