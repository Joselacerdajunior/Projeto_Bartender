import { Router } from 'express';

import auth from './middleware/auth';

import AutenticacaoController from './controller/autenticacao-controller';
import ListaProdutoController from './controller/listaproduto-controler';

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ mensagem: "API está online"});
});

routes.post('/autenticacao', AutenticacaoController.store);

routes.get("/lista-produto", auth, ListaProdutoController.index);

export default routes;