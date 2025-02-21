using AppointmentSchedule_Application.DTO;
using AppointmentSchedule_Domain.Models;

namespace AppointmentSchedule_Application.Services.Interfaces
{
    public interface IUserService
    {
        Task<User> Inserir(UserRegisterDTO user);
        Task<LoginDTO> Login(string email, string password);
        Task<ProfileDTO> Profile(int idUser);
    }
}
