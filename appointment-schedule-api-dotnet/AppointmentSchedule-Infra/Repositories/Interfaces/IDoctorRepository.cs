using AppointmentSchedule_Domain.Models;

namespace AppointmentSchedule_Infra.Repositories.Interfaces
{
    public interface IDoctorRepository
    {
        Task<Doctor> Excluir(int idDoctor);
        Task<Doctor> Editar(Doctor doctor);
        Task<Doctor> Inserir(Doctor doctor);
        Task<IEnumerable<Doctor>> Listar();
        Task<IEnumerable<Service>> ListarServicos(int idDoctor);
    }
}
