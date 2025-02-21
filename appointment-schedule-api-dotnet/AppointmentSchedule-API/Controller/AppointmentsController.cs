using AppointmentSchedule_Application.DTO;
using AppointmentSchedule_Application.Services.Interfaces;
using AppointmentSchedule_Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AppointmentSchedule_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly IAppointmentService _appointmentService;

        public AppointmentsController(IAppointmentService appointmentService)
        {
            _appointmentService = appointmentService;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> ListarByUser()
        {
            var idClaim = User.FindFirst("idUser");
            if (!int.TryParse(idClaim.Value, out int idUser))
            {
                return BadRequest("O ID do usuário no token é inválido.");
            }

            var appointments = await _appointmentService.ListarByUser(idUser);
            return Ok(appointments);
        }


        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Inserir([FromBody] AppointmentAddDTO appointment)
        {
            var idClaim = User.FindFirst("idUser");
            if (!int.TryParse(idClaim.Value, out int idUser))
            {
                return BadRequest("O ID do usuário no token é inválido.");
            }

            var newAppointment = await _appointmentService.Inserir(appointment, idUser);
            return CreatedAtAction(nameof(ListarByUser), new { idUser }, newAppointment);
        }

        [HttpDelete("{idAppointment}")]
        [Authorize]
        public async Task<IActionResult> Excluir(int idAppointment)
        {
            var result = await _appointmentService.Excluir(idAppointment);
            return Ok(result);
        }
    }
}