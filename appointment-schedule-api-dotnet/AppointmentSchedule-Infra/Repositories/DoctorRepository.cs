using AppointmentSchedule_Domain.Models;
using AppointmentSchedule_Infra.Context;
using AppointmentSchedule_Infra.Repositories.Interfaces;
using Dapper;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

namespace AppointmentSchedule_Infra.Repositories
{
    public class DoctorRepository : IDoctorRepository
    {
        private readonly AppointmentScheduleContext _context;

        public DoctorRepository(AppointmentScheduleContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Doctor>> Listar()
        {
            return await _context.Doctors
                .OrderBy(d => d.Id_doctor)
                .ToListAsync();
        }

        public async Task<Doctor> Inserir(Doctor doctor)
        {
            _context.Doctors.Add(doctor);
            await _context.SaveChangesAsync();
            return doctor;
        }

        public async Task<Doctor> Editar(Doctor doctor)
        {
            _context.Doctors.Update(doctor);
            await _context.SaveChangesAsync();
            return doctor;
        }

        public async Task<Doctor> Excluir(int idDoctor)
        {
            var doctor = await _context.Doctors.FindAsync(idDoctor);
            if (doctor != null)
            {
                _context.Doctors.Remove(doctor);
                await _context.SaveChangesAsync();
            }
            return doctor;
        }

        public async Task<IEnumerable<Service>> ListarServicos(int idDoctor)
        {


            using (var connection = new SqliteConnection(_context.Database.GetDbConnection().ConnectionString))
            {
                await connection.OpenAsync();

                // Consulta SQL
                var query = @"
                        SELECT doctor.id_service, serv.description, doctor.price 
                        FROM doctors_services doctor
                        JOIN services serv ON doctor.id_service = serv.id_service
                        WHERE doctor.id_doctor = @IdDoctor
                        ORDER BY serv.description";

                // Executa a consulta e mapeia os resultados para a classe ServiceWithPrice
                var result = await connection.QueryAsync<Service>(query, new { IdDoctor = idDoctor });

                return result;
            }
        }

    }
}