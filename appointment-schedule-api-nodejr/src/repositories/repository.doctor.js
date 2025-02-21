import { query } from "../database/sqlite.js";

async function Listar(name) {
    try {
        const baseQuery = "SELECT * FROM doctors ";
        let sql;
        let params = [];

        if (name) {
            sql = `${baseQuery}WHERE name LIKE ? ORDER BY id_doctor`;
            params = [`%${name}%`];
        } else {
            sql = `${baseQuery}ORDER BY id_doctor`;
        }

        const doctors = await query(sql, params);
        return doctors;
    } catch (error) {
        console.error("Erro ao listar médicos:", error);
        throw new Error("Não foi possível listar os médicos.");
    }
}

async function ListarServicos(id_doctor) {
    try {

        let sql = `SELECT doctor.id_service, serv.description, doctor.price 
                    FROM doctors_services doctor
                    JOIN services serv ON doctor.id_service = serv.id_service
                    WHERE doctor.id_doctor = ?
                    ORDER BY serv.description`;

        

        const servicos = await query(sql, id_doctor);
        return servicos;
    } catch (error) {
        console.error("Erro ao listar os serviços:", error);
        throw new Error("Não foi possível listar os serviços.");
    }
}

async function Inserir(name, specialty, icon) {
    try {
        let sql = `INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?) returning id_doctor`;
        return await query(sql, [name, specialty, icon]); 
        

    } catch (error) {
        console.error("Erro ao inserir médico:", error);
        throw new Error("Não foi possível inserir o médico.");
    }
}

async function Editar(id_doctor, name, specialty, icon) {
    try {
        let sql = `UPDATE doctors SET name = ?, specialty = ?, icon = ? WHERE id_doctor = ?`;
        await query(sql, [name, specialty, icon, id_doctor]); 
        return { id_doctor, name, specialty, icon };

    } catch (error) {
        console.error("Erro ao inserir médico:", error);
        throw new Error("Não foi possível editar o médico.");
    }
}

async function Excluir(id_doctor) {
    try {
        let sql = `DELETE FROM doctors WHERE id_doctor = ?`;
        await query(sql, [id_doctor]); 
        return { id_doctor };


    } catch (error) {
        console.error("Erro ao inserir médico:", error);
        throw new Error("Não foi possível excluir o médico.");
    }
}

export default { Listar , Inserir, Editar, Excluir, ListarServicos};
