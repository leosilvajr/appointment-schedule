namespace AppointmentSchedule_API.Configurations
{
    public static class CorsConfig
    {
        public static void AddCorsConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            // Configuração de CORS
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", policy =>
                {
                    policy.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                });
            });

        }
    }

}