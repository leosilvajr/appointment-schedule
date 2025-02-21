using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace AppointmentSchedule_Domain.Models
{
    public class Appointment
    {
        [Key]
        [Column("id_appointment")]
        public int Id_appointment { get; set; }

        [Column("id_doctor")]
        public int IdDoctor { get; set; }

        [Column("id_service")]
        public int IdService { get; set; }

        [Column("id_user")]
        public int IdUser { get; set; }
        [Column("booking_date")]
        public DateTime BookingDate { get; set; }
        [Column("booking_hour")]
        public string BookingHour { get; set; }

        // Relacionamentos
        [JsonIgnore]
        public Doctor Doctor { get; set; }
        public Service Service { get; set; }
        public User User { get; set; }

    }
}
