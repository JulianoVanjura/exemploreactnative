const { count, join } = require('../database/connection');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        //usado para paginação
        const {pagina = 1} = request.query;

        //pega a qtd de todos os registros
        const [qtdRegistro] = await connection('casos').count();


        const casos = await connection('casos').join('ongs', 'ongs.id', '=', 'casos.ong_id').limit(5).offset((pagina - 1) * 5)
        .select(['casos.*', 'ongs.nome', 'ongs.email', 'ongs.whatsapp', 'ongs.cidade', 'ongs.estado']);
    
        response.header('X-Total-Count', qtdRegistro['count(*)']);

       return response.json(casos); 
    },

    async create (request, response) {
        const {titulo, descricao, valor} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('casos').insert({
            titulo, descricao, valor, ong_id,
        });


        return response.json({id});
    },

    async delete (request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const casos = await connection('casos').where('id', id).select('ong_id').first();

        if (casos.ong_id != ong_id){
            //401 não permitido
            return response.status(401).json({error: "Operação não permitida!"});
        }

        await connection('casos').where('id', id).delete();

        //204 resposta sem conteudo
        return response.status(204).send();
    }


};