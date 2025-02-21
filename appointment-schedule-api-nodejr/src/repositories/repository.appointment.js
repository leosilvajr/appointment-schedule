import { query } from "../database/sqlite.js";

async function Listar(id_user) {
    try {
        let sql = `SELECT 
        APP.id_appointment, 
        SERV.description AS service, 
        DOC.name AS doctor, 
        DOC.specialty, 
        APP.booking_date, 
        APP.booking_hour, 
        USER.name AS user, 
        DS.price
    FROM appointments APP
    JOIN services SERV ON SERV.id_service = APP.id_service
    JOIN doctors DOC ON DOC.id_doctor = APP.id_doctor
    JOIN users USER ON USER.id_user = APP.id_user
    JOIN doctors_services DS ON DS.id_doctor = APP.id_doctor AND DS.id_service = APP.id_service
    WHERE APP.id_user = ?
    ORDER BY APP.booking_date, APP.booking_hour
    `;

        const appointments = await query(sql, id_user);
        return appointments;

    } catch (error) {
        console.error("Erro ao listar agendamentos:", error);
        throw new Error("Não foi possível listar os agendamentos.");
    }
}

async function Inserir(id_user, id_doctor, id_service, booking_date, booking_hour ) {
    try {
        let sql = `INSERT INTO appointments (id_user, id_doctor, id_service, booking_date, booking_hour ) 
                    VALUES (?, ?, ?, ?, ?) 
                    returning id_appointment`;
        const appointment = await query(sql, [id_user, id_doctor, id_service, booking_date, booking_hour ]); 
        return appointment[0];

    } catch (error) {
        console.error("Erro ao inserir médico:", error);
        throw new Error("Não foi possível inserir o médico.");
    }
}


async function Excluir(id_user, id_appointment) {
    try {
        let sql = `DELETE FROM appointments WHERE id_user = ? AND id_appointment = ?`;

        await query(sql, [id_user, id_appointment]); 
        return {id_appointment};

    } catch (error) {
        console.error("Erro ao excluir agendamento:", error);
        throw new Error("Não foi possível excluir o agendamento.");
    }
}


export default { Listar, Inserir, Excluir };
