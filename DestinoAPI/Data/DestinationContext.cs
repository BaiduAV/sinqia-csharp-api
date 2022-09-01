using Microsoft.EntityFrameworkCore;
using DestinoAPI.Models;

namespace DestinoAPI.Data;

public class DestinationContext : DbContext
{
    public DestinationContext(DbContextOptions<DestinationContext> options)
        : base(options)
    {
    }

    public DbSet<Destination> Destinations => Set<Destination>();
}