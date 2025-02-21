using Microsoft.AspNetCore.Mvc;

namespace AppointmentSchedule_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthController : ControllerBase
    {
        [HttpGet("status")]
        public IActionResult GetStatus()
        {
            return Ok(new
            {
                status = "API ESTA NO AR FUNCIONANDO",
                data_hora = DateTime.UtcNow.ToLocalTime().ToString("HH:mm dd/MM/yyyy")
            });
        }
    }
}
