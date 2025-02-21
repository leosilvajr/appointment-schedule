using AppointmentSchedule_Domain.Models;

namespace AppointmentSchedule_Application.DTO
{
    public class ProfileDTO
    {
        public int Id_user { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public static ProfileDTO FromUser(User user)
        {
            return new ProfileDTO
            {
                Id_user = user.Id_user,
                Name = user.Name,
                Email = user.Email
            };
        }
    }
}
