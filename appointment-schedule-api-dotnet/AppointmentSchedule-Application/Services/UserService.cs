using AppointmentSchedule_Application.DTO;
using AppointmentSchedule_Application.Services.Interfaces;
using AppointmentSchedule_Domain.Models;
using AppointmentSchedule_Infra.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AppointmentSchedule_Application.Services
{
    public class UserService : IUserService
    {
        private readonly IConfiguration _configuration;
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        public async Task<User> Inserir(UserRegisterDTO user)
        {
            var existingUser = await _userRepository.ListarByEmail(user.Email);
            if (existingUser != null)
            {
                throw new Exception("O email já está em uso");
            }

            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

            User newUser = new User()
            {
                Name = user.Name,
                Email = user.Email,
                Password = user.Password,
            };

            return await _userRepository.Inserir(newUser);
        }

        public async Task<LoginDTO> Login(string email, string password)
        {
            var user = await _userRepository.ListarByEmail(email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.Password))
            {
                return null;
            }

            var token = GenerateJwtToken(user.Id_user);

            var loginResponse = new LoginDTO
            {
                Id_user = user.Id_user,
                Name = user.Name,
                Email = user.Email,
                Token = token
            };

            return loginResponse;
        }


        public async Task<ProfileDTO> Profile(int idUser)
        {
            var user = await _userRepository.Profile(idUser);
            var profile = ProfileDTO.FromUser(user);
            return profile;
        }

        private string GenerateJwtToken(int idUser)
        {
            var key = Encoding.ASCII.GetBytes(_configuration["JwtSettings:SecretKey"]);

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("idUser", idUser.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}