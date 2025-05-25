using AppointmentSchedule_Infra.Context;
using Microsoft.EntityFrameworkCore;
using System.IO;

public static class DatabaseConfig
{
    public static void AddDatabaseConfiguration(this IServiceCollection services, IConfiguration configuration)
    {
        // Caminho físico absoluto do arquivo do banco
        var relativePath = configuration.GetConnectionString("DefaultConnection");

        var dbPath = Path.Combine(AppContext.BaseDirectory, relativePath.Replace("Data Source=", "").Replace("\\", Path.DirectorySeparatorChar.ToString()));
        var connectionString = $"Data Source={dbPath}";

        services.AddDbContext<AppointmentScheduleContext>(options =>
            options.UseSqlite(connectionString)
        );
    }
}
