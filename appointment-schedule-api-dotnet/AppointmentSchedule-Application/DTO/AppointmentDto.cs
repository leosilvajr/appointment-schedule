namespace AppointmentSchedule_Application.DTO
{
    public class AppointmentDto
    {
        public int IdAppointment { get; set; }
        public string Service { get; set; }
        public string Doctor { get; set; }
        public string Specialty { get; set; }
        public DateTime BookingDate { get; set; }
        public string BookingHour { get; set; }
        public string User { get; set; }
        public decimal Price { get; set; }
    }
}
