using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using AU.Models;
using AU.Models.DTO;

namespace AU.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Build>Builds { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<RoomType> RoomTypes { get; set; }
    }
}