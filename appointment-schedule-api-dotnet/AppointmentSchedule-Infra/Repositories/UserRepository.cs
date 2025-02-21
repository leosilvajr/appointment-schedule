using AppointmentSchedule_Domain.Models;
using AppointmentSchedule_Infra.Context;
using AppointmentSchedule_Infra.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace AppointmentSchedule_Infra.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppointmentScheduleContext _context;

        public UserRepository(AppointmentScheduleContext context)
        {
            _context = context;
        }

        public async Task<User> Inserir(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> ListarByEmail(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<User> Profile(int idUser)
        {
            return await _context.Users
                .Where(u => u.Id_user == idUser)
                .Select(u => new User
                {
                    Id_user = u.Id_user,
                    Name = u.Name,
                    Email = u.Email
                })
                .FirstOrDefaultAsync();
        }
    }
}