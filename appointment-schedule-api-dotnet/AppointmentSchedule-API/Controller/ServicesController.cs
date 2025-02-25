using Microsoft.AspNetCore.Mvc;

namespace AppointmentSchedule_API.Controller
{
    public class ServicesController : ControllerBase
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
