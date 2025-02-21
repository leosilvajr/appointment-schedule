import repositoryUser from "../repositories/repository.user.js";  
import bcrypt from "bcrypt";
import jwt from "../token.js"

async function Inserir(name, email, password) {
    // Verifica se o email já existe
    const existingUser = await repositoryUser.ListarByEmail(email);  // Alterado para ListarByEmail
    if (existingUser) {
        throw new Error('O email já está em uso');
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Valor de 10 seria a quantidade de saltos
    const user = await repositoryUser.Inserir(name, email, hashedPassword);

    user.token = jwt.CreateToken(user.id_user);
    return user;
}


async function Login(email, password) {
    // Verificar se o e-mail foi fornecido
    if (!email || !password) {
        return { error: "E-mail e senha são obrigatórios" };
    }

    // Buscar o usuário pelo e-mail
    const user = await repositoryUser.ListarByEmail(email);

    // Verificar se o usuário existe
    if (!user) {
        return { error: "Credenciais inválidas: usuário não encontrado" };
    }

    // Verificar a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return { error: "Credenciais inválidas: senha incorreta" };
    }

    // Gerar o token JWT e retornar o usuário (login bem-sucedido)
    delete user.password; // Remover a senha por segurança
    user.token = jwt.CreateToken(user.id_user);

    return user;
}


async function Profile (id_user){
    return await repositoryUser.Profile(id_user);
}

export default {Inserir, Login, Profile};