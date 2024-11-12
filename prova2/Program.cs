using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace prova2
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var context = new AppDbContext())
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                
                var aluno1 = new Aluno { Nome = "Isadora Hansen", Matricula = "1010AA", Idade = 12  };
                var aluno2 = new Aluno { Nome = "David Mundim", Matricula = "1010BB", Idade = 87 };

                var disciplina1 = new Disciplina { NomeDisciplina = "Topicos-integradores-I", CodigoDisciplina = "1111AA" };
                var disciplina2 = new Disciplina { NomeDisciplina = "Gamedev", CodigoDisciplina = "1111BB" };

                aluno1.Disciplinas.Add(disciplina1);
                aluno1.Disciplinas.Add(disciplina2);

                aluno2.Disciplinas.Add(disciplina1); 
                
                context.Alunos.AddRange(aluno1, aluno2);
                
                context.Disciplinas.AddRange(disciplina1, disciplina2);
                
                context.SaveChanges();

                
                var alunos = context.Alunos.Include(a => a.Disciplinas).ToList();
                foreach (var aluno in alunos)
                {
                    Console.WriteLine($"Aluno: {aluno.Nome}");
                    foreach (var disciplina in aluno.Disciplinas)
                    {
                        Console.WriteLine($"Disciplina: {disciplina.NomeDisciplina}");
                    }
                }
            }
        }
    }
}

