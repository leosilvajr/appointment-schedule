using AppointmentSchedule_Domain.Models;

namespace AppointmentSchedule_Application.DTO
{
    public class AppointmentListDTO
    {
        public int Id_appointment { get; set; }
        public string Service { get; set; }
        public string Doctor { get; set; }
        public string Specialty { get; set; }
        public DateTime Booking_date { get; set; }
        public string Booking_hour { get; set; }
        public string User { get; set; }
        public decimal Price { get; set; }


    }

}
