using Microsoft.EntityFrameworkCore;
using aula11_EF.Models;

public class AppDbContext: AppDbContext{
    public DbSet<Cliente> Cliente{ get; set;}
    public DbSet<Livro> Livro {get; set;}
    public DbSet<Venda> Vendas {get; set;}

    public override void OnConfiguring(DbcontextOptionsBuilder optionsBuilder){
        optionsBuilder.UserSqlite("Data Source=vendas.db");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder){
        modelBuilder.Entity<Vendas>().HasMany(Vendas => v.Livros).WithMnay().UsingEntity(j => j.ToTable("VendaLivros"));

        base.OnModelCreating(modelBuilder);
    }


}