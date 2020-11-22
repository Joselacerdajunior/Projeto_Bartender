import { response } from 'express';
import ListaProdutoModel from '../models/listaproduto-model';

// arquivo da video aula -> "todolist-controler".
class ListaProdutoController {
    async index(request, response) {
        const allListaProduto = await ListaProdutoModel.selecionarListaProduto();
        return response.json(allListaProduto);
    }

    async store(request, response) {
        const { nome, descricao, valor, imagem } = request.body;

        if (!nome || !descricao || !valor || !imagem) {
            return response.status(400).json({ mensagem: "Preencha todos os parametros!"})
        }

        const listaProdutosCriada = await ListaProdutoModel.salvarNovoProduto({
            name: nome,
            description: descricao,
            value: valor,
            src_image: imagem
        });

        return response.status(201).json(listaProdutosCriada);
    }

    async delete(request, response) {
        const { id } = request.params;

        if(!id) {
            return response.status(400).json({ mensagem: "ID não informada!" });
        }

        await ListaProdutoModel.deletarProduto(id);

        return response.status(204).json({ mensagem: "Item da lista deletada com sucesso!" })
    }
}

export default new ListaProdutoController();