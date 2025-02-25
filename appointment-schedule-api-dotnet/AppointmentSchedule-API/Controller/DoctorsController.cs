using AppointmentSchedule_Application.DTO;
using AppointmentSchedule_Application.Services.Interfaces;
using AppointmentSchedule_Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AppointmentSchedule_API.Controllers
{
    [Route("[controller]")]
    [Authorize]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        private readonly IDoctorService _doctorService;

        public DoctorsController(IDoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doctor>>> Listar()
        {
            var idClaim = User.FindFirst("idUser");
            if (!int.TryParse(idClaim.Value, out int idUser))
            {
                return BadRequest("O ID do usuário no token é inválido.");
            }
            var doctors = await _doctorService.Listar();
            return Ok(doctors);
        }

        [HttpGet("{idDoctor}/services")]
        public async Task<IActionResult> ListarServicos(int idDoctor)
        {
            var servicos = await _doctorService.ListarServicos(idDoctor);
            return Ok(servicos);
        }


        [HttpPost]
        public async Task<IActionResult> Inserir([FromBody] DoctorAddDTO doctor)
        {
            var newDoctor = await _doctorService.Inserir(doctor);
            return CreatedAtAction(nameof(Listar), new { id = newDoctor.Id_doctor }, newDoctor);
        }

        [HttpPut("{idDoctor}")]
        public async Task<IActionResult> Editar(int idDoctor, [FromBody] Doctor doctor)
        {
            if (idDoctor != doctor.Id_doctor)
            {
                return BadRequest();
            }

            var updatedDoctor = await _doctorService.Editar(doctor);
            return Ok(updatedDoctor);
        }

        [HttpDelete("{idDoctor}")]
        public async Task<IActionResult> Excluir(int idDoctor)
        {
            var result = await _doctorService.Excluir(idDoctor);
            return Ok(result);
        }


    }
}