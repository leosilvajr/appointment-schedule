//Arquivo js responsável por criar o token e validar o token.
import jwt from "jsonwebtoken";

const secretToken = "secretToken"; //Usar uma chave segura para criptografia do token

function CreateToken(id_user){

    const token = jwt.sign({id_user},  //Criando o token com o id do usuário
                secretToken,           //Chave de criptografia
                {expiresIn: "1d"});    //Tempo de expiracao do token
    return token;

}

function ValidateToken(req, res, next){
    //Toda vez que chegar uma requisição e for uma rota protegida, será necessario validar o token
    const authToken = req.headers.authorization; // "Bearer 0000000000000000000000000"

    if (!authToken){
        return res.status(401).json({error: "Token não informado."});
    }

    const [bearer, token] = authToken.split(" "); // ["Bearer", "0000000000000000000000000"]

    jwt.verify(token, secretToken, (error, tokenDecoded) => {
        if (error){
            return res.status(401).json({error: "Token inválido."});     
        }

        req.id_user = tokenDecoded.id_user; //Adicionando o id do usuário na requisição
        next();

    });
}

export default {CreateToken, ValidateToken};    