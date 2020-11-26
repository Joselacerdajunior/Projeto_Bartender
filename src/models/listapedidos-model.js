import db from '../config/db';

class ListaPedidosModel {
    async selecionarListaPedido( num_comanda ) {
        return await db('listapedidos');
    }

    async salvarNovoPedido({ num_comanda, id_produto, quantidade }) {
        return await db('listapedidos').insert({ num_comanda, id_produto, quantidade }).returning("*");
    }
}

export default new ListaPedidosModel();