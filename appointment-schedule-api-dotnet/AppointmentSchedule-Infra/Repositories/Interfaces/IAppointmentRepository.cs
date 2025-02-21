using AppointmentSchedule_Domain.Models;

namespace AppointmentSchedule_Infra.Repositories.Interfaces
{
    public interface IAppointmentRepository
    {
        Task<Appointment> Excluir(int idAppointment);
        Task<Appointment> Inserir(Appointment appointment);
        Task<IEnumerable<Appointment>> ListarByUser(int idUser);
    }
}
