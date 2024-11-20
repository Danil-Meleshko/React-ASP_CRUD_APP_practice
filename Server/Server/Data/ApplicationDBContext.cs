using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data
{
    public class ApplicationDBContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options): base(options) { }
    }
}
