using AppointmentSchedule_Application.DTO;
using AppointmentSchedule_Application.Services.Interfaces;
using AppointmentSchedule_Domain.Models;
using AppointmentSchedule_Infra.Repositories.Interfaces;

namespace AppointmentSchedule_Application.Services
{
    public class AppointmentService : IAppointmentService
    {
        private readonly IAppointmentRepository _appointmentRepository;

        public AppointmentService(IAppointmentRepository appointmentRepository)
        {
            _appointmentRepository = appointmentRepository;
        }

        public async Task<List<AppointmentListDTO>> ListarByUser(int idUser)
        {
            var appointments = await _appointmentRepository.ListarByUser(idUser);

            var appointmentList = appointments
                .Select(appointment => new AppointmentListDTO
                {
                    Id_appointment = appointment.Id_appointment,
                    Service = appointment.Service.Description,
                    Doctor = appointment.Doctor.Name,
                    Specialty = appointment.Doctor.Specialty,
                    Booking_date = appointment.BookingDate,
                    Booking_hour = appointment.BookingHour,
                    User = appointment.User.Name,
                    Price = appointment.Doctor.DoctorServices
                        .FirstOrDefault(ds => ds.IdService == appointment.IdService)?.Price ?? 0
                })
                .ToList();

            return appointmentList;
        }


        public async Task<Appointment> Inserir(AppointmentAddDTO appointmentDTO, int idUser)
        {
            var appointment = new Appointment();
            appointment.IdUser = idUser;
            appointment.IdDoctor = appointmentDTO.id_doctor;
            appointment.IdService = appointmentDTO.id_service;
            appointment.BookingDate = appointmentDTO.booking_date;
            appointment.BookingHour = appointmentDTO.booking_hour;

            return await _appointmentRepository.Inserir(appointment);
        }

        public async Task<Appointment> Excluir(int idAppointment)
        {
            return await _appointmentRepository.Excluir(idAppointment);
        }
    }
}