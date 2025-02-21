using AppointmentSchedule_Application.DTO;
using AppointmentSchedule_Application.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AppointmentSchedule_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Inserir([FromBody] UserRegisterDTO user)
        {
            var newUser = await _userService.Inserir(user);
            return CreatedAtAction(nameof(Inserir), new { id = newUser.Id_user }, newUser);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO request)
        {
            var result = await _userService.Login(request.Email, request.Password);
            if (result == null)
            {
                return Ok("Usuário ou senha inválidos.");
            }
            return Ok(result);
        }


        [HttpGet("profile")]
        [Authorize] // Garante que apenas usuários autenticados podem acessar
        public async Task<IActionResult> Profile()
        {
            var idClaim = User.FindFirst("idUser");

            if (idClaim == null)
            {
                return Unauthorized("Token JWT inválido ou claim 'idUser' ausente.");
            }

            if (!int.TryParse(idClaim.Value, out int idUser))
            {
                return BadRequest("O ID do usuário no token é inválido.");
            }

            var user = await _userService.Profile(idUser);

            return Ok(user);
        }

    }


}