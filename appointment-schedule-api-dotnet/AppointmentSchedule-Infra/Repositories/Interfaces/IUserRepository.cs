using AppointmentSchedule_Domain.Models;

namespace AppointmentSchedule_Infra.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Inserir(User user);
        Task<User> ListarByEmail(string email);
        Task<User> Profile(int idUser);
    }
}
