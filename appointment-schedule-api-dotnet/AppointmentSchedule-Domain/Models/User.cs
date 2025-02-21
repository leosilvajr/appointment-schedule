using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppointmentSchedule_Domain.Models
{
    public class User
    {
        [Key]
        [Column("id_user")]
        public int Id_user { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("email")]
        public string Email { get; set; }
        [Column("password")]
        public string Password { get; set; }

        [NotMapped]
        public string Token { get; set; }

        // Relacionamento com Agendamentos
        public ICollection<Appointment> Appointments { get; set; }
    }
}
