using AppointmentSchedule_Application.Services.Interfaces;
using AppointmentSchedule_Domain.Models;
using AppointmentSchedule_Infra.Repositories.Interfaces;

namespace AppointmentSchedule_Application.Services
{
    public class DoctorService : IDoctorService
    {
        private readonly IDoctorRepository _doctorRepository;

        public DoctorService(IDoctorRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }

        public async Task<IEnumerable<Doctor>> Listar()
        {
            return await _doctorRepository.Listar();
        }

        public async Task<Doctor> Inserir(Doctor doctor)
        {
            return await _doctorRepository.Inserir(doctor);
        }

        public async Task<Doctor> Editar(Doctor doctor)
        {
            return await _doctorRepository.Editar(doctor);
        }

        public async Task<Doctor> Excluir(int idDoctor)
        {
            return await _doctorRepository.Excluir(idDoctor);
        }

        public async Task<IEnumerable<Service>> ListarServicos(int idDoctor)
        {
            return await _doctorRepository.ListarServicos(idDoctor);
        }
    }
}