using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppointmentSchedule_Domain.Models
{
    public class Service
    {
        [Key]
        [Column("id_service")]
        public int Id_service { get; set; }

        [Column("description")]
        public string Description { get; set; }

        [NotMapped]
        public decimal Price { get; set; }

        // Relacionamento com Doutores
        public ICollection<DoctorService> DoctorServices { get; set; }
        public ICollection<Appointment> Appointments { get; set; }
    }
}
