import ListaProdutoModel from '../models/listaproduto-model';

// arquivo da video aula -> "todolist-controler".
class ListaProdutoController {
    async index(request, response) {
        const allListaProduto = await ListaProdutoModel.selecionarListaProduto();
        return response.json(allListaProduto);
    }

    
}

export default new ListaProdutoController();