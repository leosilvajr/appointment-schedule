import { query } from "../database/sqlite.js";

async function Inserir(name, email, password) {
    try {
        let sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?) returning id_user`;
        const result = await query(sql, [name, email, password]); 
        return result[0];
        

    } catch (error) {
        console.error("Erro ao inserir o usuário:", error);
        throw new Error("Não foi possível inserir o usuário.");
    }
}

// Alteração no retorno de ListarByEmail
async function ListarByEmail(email) {
    let sql = `SELECT * FROM users WHERE email = ?`;
    const user = await query(sql, [email]);

    if (user.length === 0) {
        return null;  // Retorna null ao invés de um array vazio
    } else {
        return user[0];  // Retorna o primeiro usuário encontrado
    }
}


async function Profile(id_user) {
    try {
        let sql = `SELECT id_user, name, email FROM users WHERE id_user = ?`;
        const user = await query(sql, [id_user]);

        if (user.length == 0) 
            return [];
        else
            return user[0];

    } catch (error) {
        console.error("Erro ao obter o perfil do usuário:", error);
        throw new Error("Não foi possível obter o perfil do usuário.");
    }
}

export default {Inserir, ListarByEmail, Profile};