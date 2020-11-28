import { response } from 'express';
import ListaPedidosModel from '../models/listapedidos-model';

// arquivo da video aula -> "todolist-controler".
class ListaPedidosController {
    async index(request, response) {
        const { comanda } = request.body;

        const allListaPedido = await ListaPedidosModel.selecionarListaPedido({ comanda });
        return response.json(allListaPedido);
    }

    async store(request, response) {
        const { comanda, id_produto, quantidade } = request.body;

        if (!comanda || !id_produto || !quantidade) {
            return response.status(400).json({ mensagem: "Preencha todos os parametros!"})
        }

        const listaPedidosCriada = await ListaPedidosModel.salvarNovoPedido({
            num_comanda: comanda,
            id_produto,
            quantidade
        });

        return response.status(201).json(listaPedidosCriada);
    }
}

export default new ListaPedidosController();