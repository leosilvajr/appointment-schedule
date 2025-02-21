
import repositoryAppointment from "../repositories/repository.appointment.js";

async function Listar (id_user) {
    return await repositoryAppointment.Listar(id_user);
}

async function Inserir( id_user, id_doctor, id_service, booking_date, booking_hour  ){
    return await repositoryAppointment.Inserir( id_user, id_doctor, id_service, booking_date, booking_hour  );
}


async function Excluir (id_user, id_appointment) {
    return await repositoryAppointment.Excluir(id_user, id_appointment);
}


export default {Listar, Inserir, Excluir}; 