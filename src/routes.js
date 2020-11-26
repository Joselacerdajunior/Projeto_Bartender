import { Router } from 'express';

import auth from './middleware/auth';

import AutenticacaoController from './controller/autenticacao-controller';
import ListaProdutoController from './controller/listaproduto-controler';
import ListaPedidosController from './controller/listapedidos-controller';

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ mensagem: "API está online"});
});

routes.post('/autenticacao', AutenticacaoController.store);

routes.get("/lista-produto", auth, ListaProdutoController.index);
routes.post("/lista-produto", auth, ListaProdutoController.store);
routes.delete("/lista-produto/:id", auth, ListaProdutoController.delete);
routes.post("/lista-produto/:id", auth, ListaProdutoController.update);

routes.get("/lista-pedidos", auth, ListaPedidosController.index);
routes.post("/lista-pedidos", auth, ListaPedidosController.store);

export default routes;