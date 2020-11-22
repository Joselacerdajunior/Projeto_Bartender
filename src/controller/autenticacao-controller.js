class AutenticacaoController {

    store(request, response) {
        const { login, senha } = request.body;
        
        if(login !== "unisal" || senha !== "unisal") {
            return response
            .status(401)
            .json({ mensagem: "Usuário não autenticado!", autenticado: false });
        }

        return response.json({ autenticado: true })
    }
}

export default new AutenticacaoController();