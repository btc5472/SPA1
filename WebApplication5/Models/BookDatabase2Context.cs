using Microsoft.EntityFrameworkCore;

#nullable disable

namespace WebApplication5.Models
{
    public partial class BookDatabase2Context : DbContext
    {
        public BookDatabase2Context()
        {
        }

        public BookDatabase2Context(DbContextOptions<BookDatabase2Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Author> Authors { get; set; }
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<Exoplanet> Exoplanets { get; set; }
        public virtual DbSet<SolarSystem> SolarSystems { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=bcdbinstance2.cihlgawk8vbv.us-east-1.rds.amazonaws.com;Database=BookDatabase2;User ID=admin;Password=Stealths1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Author>(entity =>
            {
                entity.Property(e => e.AuthorId).ValueGeneratedNever();

                entity.Property(e => e.Name).IsUnicode(false);
            });

            modelBuilder.Entity<Book>(entity =>
            {
                entity.Property(e => e.BookId).ValueGeneratedNever();
            });

            modelBuilder.Entity<Exoplanet>(entity =>
            {
                entity.Property(e => e.ExoplanetId).ValueGeneratedNever();

                entity.HasOne(d => d.SolarSystem)
                    .WithMany(p => p.Exoplanets)
                    .HasForeignKey(d => d.SolarSystemId)
                    .HasConstraintName("FK_Exoplanets_Solar Systems");
            });

            modelBuilder.Entity<SolarSystem>(entity =>
            {
                entity.Property(e => e.SolarSystemId).ValueGeneratedNever();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
