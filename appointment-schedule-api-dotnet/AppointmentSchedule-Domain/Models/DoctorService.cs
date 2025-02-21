using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppointmentSchedule_Domain.Models
{
    [Table("doctors_services")]
    public class DoctorService
    {
        [Key]
        [Column("id_doctor_service")]
        public int IdDoctorService { get; set; }

        [Column("id_doctor")]
        public int IdDoctor { get; set; }

        [Column("id_service")]
        public int IdService { get; set; }

        [Column("price")]
        public decimal Price { get; set; }

        // Relacionamentos
        public Doctor Doctor { get; set; }
        public Service Service { get; set; }
    }
}
