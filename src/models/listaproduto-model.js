import db from '../config/db';

class ListaProdutoModel {
    async selecionarListaProduto() {
        return await db('lista_produtos');
    }
}

export default new ListaProdutoModel();