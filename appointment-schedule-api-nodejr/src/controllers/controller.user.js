import serviceUser from "../services/service.user.js";

async function Inserir(req, res) {
    const { name, email, password } = req.body;
    try {
        const user = await serviceUser.Inserir(name, email, password);
        res.status(201).json(user);
    } catch (error) {
        if (error.message === 'O email já está em uso') {
            res.status(400).json({ message: error.message });
        } else {
            console.error(error); // Log para depuração
            res.status(500).json({ message: 'Erro ao tentar criar o usuário.' });
        }
    }
}

async function Login(req, res) {
    const { email, password } = req.body;

    try {
        const result = await serviceUser.Login(email, password);

        if (result.error) {
            // Retornar o erro com status 401 (não autorizado)
            return res.status(401).json({ message: result.error });
        }

        // Retornar o usuário logado (login bem-sucedido)
        return res.status(200).json(result);
    } catch (err) {
        // Tratar erros inesperados
        console.error(err);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}


async function Profile (req, res){
    const id_user = req.id_user;    
    const user = await serviceUser.Profile(id_user );
    res.status(200).json(user);
}


export default {Inserir, Login, Profile};