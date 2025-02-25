using AppointmentSchedule_Application.DTO;
using AppointmentSchedule_Domain.Models;

namespace AppointmentSchedule_Application.Services.Interfaces
{
    public interface IDoctorService
    {
        Task<Doctor> Editar(Doctor doctor);
        Task<Doctor> Excluir(int idDoctor);
        Task<Doctor> Inserir(DoctorAddDTO doctor);
        Task<IEnumerable<Doctor>> Listar();
        Task<IEnumerable<Service>> ListarServicos(int idDoctor);
    }
}
