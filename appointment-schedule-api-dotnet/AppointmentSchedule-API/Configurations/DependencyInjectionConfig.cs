using AppointmentSchedule_Application.Services;
using AppointmentSchedule_Application.Services.Interfaces;
using AppointmentSchedule_Infra.Repositories;
using AppointmentSchedule_Infra.Repositories.Interfaces;

namespace AppointmentSchedule_API.Configurations
{
    public static class DependencyInjectionConfig
    {
        public static void AddDependencyInjectionConfiguration(this IServiceCollection services)
        {
            // User
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserService, UserService>();

            // Doctor
            services.AddScoped<IDoctorRepository, DoctorRepository>();
            services.AddScoped<IDoctorService, DoctorService>();

            // Appointment
            services.AddScoped<IAppointmentService, AppointmentService>();
            services.AddScoped<IAppointmentRepository, AppointmentRepository>();
        }
    }
}
