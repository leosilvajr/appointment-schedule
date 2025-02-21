namespace AppointmentSchedule_Application.DTO
{
    public class AppointmentAddDTO
    {
        public int id_doctor { get; set; }
        public int id_service { get; set; }
        public DateTime booking_date { get; set; }
        public string booking_hour { get; set; }
    }
}

