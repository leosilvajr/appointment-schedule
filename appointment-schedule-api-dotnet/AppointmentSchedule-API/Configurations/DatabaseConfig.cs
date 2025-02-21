using AppointmentSchedule_Infra.Context;
using Microsoft.EntityFrameworkCore;

public static class DatabaseConfig
{
    public static void AddDatabaseConfiguration(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("DefaultConnection");

        services.AddDbContext<AppointmentScheduleContext>(options =>
            options.UseSqlite(connectionString)
        );
    }
}