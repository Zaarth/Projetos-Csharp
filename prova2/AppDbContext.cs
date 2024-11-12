using Microsoft.EntityFrameworkCore;

namespace prova2
{
    public class AppDbContext : DbContext
    {
        public DbSet<Aluno> Alunos { get; set; }
        public DbSet<Disciplina> Disciplinas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=faculdade.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Aluno>()
                .HasMany(a => a.Disciplinas)
                .WithMany(d => d.Alunos)
                .UsingEntity(j => j.ToTable("AlunoDisicplinas")); 
        }
    }
}
