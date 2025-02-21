using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppointmentSchedule_Domain.Models
{
    public class Doctor
    {
        [Key]
        [Column("id_doctor")]
        public int Id_doctor { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("specialty")]
        public string Specialty { get; set; }
        [Column("icon")]
        public string Icon { get; set; }

        // Relacionamento com Serviços e Agendamentos
        public ICollection<DoctorService> DoctorServices { get; set; }
        public ICollection<Appointment> Appointments { get; set; }
    }
}
