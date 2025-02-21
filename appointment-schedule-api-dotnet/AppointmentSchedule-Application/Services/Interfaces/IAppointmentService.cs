using AppointmentSchedule_Application.DTO;
using AppointmentSchedule_Domain.Models;

namespace AppointmentSchedule_Application.Services.Interfaces
{
    public interface IAppointmentService
    {
        Task<Appointment> Excluir(int idAppointment);
        Task<Appointment> Inserir(AppointmentAddDTO appointment, int idUser);
        Task<List<AppointmentListDTO>> ListarByUser(int idUser);
    }
}
