import db from '../config/db';

class ListaProdutoModel {
    async selecionarListaProduto() {
        return await db('lista_produtos');
    }

    async salvarNovoProduto({ name, description, value, src_image }) {
        return await db('lista_produtos').insert({ name, description, value, src_image }).returning("*");
    }

    async deletarProduto(id) {
        await db('lista_produtos').delete().where({ id });
    }

    async atualizarProduto(id, name, description, value, src_image) {
        await db('lista_produtos').update({ name, description, value, src_image }).where({ id });
    }
}

export default new ListaProdutoModel();