import db from '../config/db';

class ListaUsuariosModel {
    async listarUsuario(username, password) {
        return await db('users').where({ username, password }).returning("*");
    }
}

export default new ListaUsuarioModel();