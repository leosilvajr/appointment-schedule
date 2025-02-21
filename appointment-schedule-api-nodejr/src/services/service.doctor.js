import repositoryDoctor from "../repositories/repository.doctor.js";  

async function Listar (name){
    return await repositoryDoctor.Listar(name);
}

async function Inserir(name, specialty, icon){
    return await repositoryDoctor.Inserir(name, specialty, icon);
}

async function Editar(id_doctor ,name, specialty, icon){
    return await repositoryDoctor.Editar(id_doctor ,name, specialty, icon);
}

async function Excluir(id_doctor){
    return await repositoryDoctor.Excluir(id_doctor);
}

async function ListarServicos (id_doctor){
    return await repositoryDoctor.ListarServicos(id_doctor);
}

export default {Listar , Inserir, Editar, Excluir, ListarServicos}; 