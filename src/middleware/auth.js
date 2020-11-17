export default (request, response, next) => {
    const { authorization } = request.headers;

    if(!authorization) {
        return response.status(401).json({ mensagem: "Request não autorizada!" });
    }

    const [_, basic] = authorization.split('Basic ');

    const bufferObject = Buffer.from(basic, 'base64');

    const userData = bufferObject.toString('utf8');

    const [user, password] = userData.split(':');

    if(user !== "unisal" || password !== "unisal") {
        return response.status(401).json({ mensagem: "Dados incorretos!" });
    }

    next();
};