using AppointmentSchedule_Domain.Models;
using AppointmentSchedule_Infra.Context;
using AppointmentSchedule_Infra.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace AppointmentSchedule_Infra.Repositories
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly AppointmentScheduleContext _context;

        public AppointmentRepository(AppointmentScheduleContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Appointment>> ListarByUser(int idUser)
        {
            var appointments = await _context.Appointments
                .Where(a => a.IdUser == idUser)
                .Include(a => a.Doctor) 
                .Include(a => a.Service) 
                .Include(a => a.User)   
                .Include(a => a.Doctor.DoctorServices) 
                .OrderBy(a => a.BookingDate)
                .ThenBy(a => a.BookingHour)
                .ToListAsync();

            return appointments;
        }

        public async Task<Appointment> Inserir(Appointment appointment)
        {
            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }

        public async Task<Appointment> Excluir(int idAppointment)
        {
            var appointment = await _context.Appointments.FindAsync(idAppointment);
            if (appointment != null)
            {
                _context.Appointments.Remove(appointment);
                await _context.SaveChangesAsync();
            }
            return appointment;
        }
    }
}