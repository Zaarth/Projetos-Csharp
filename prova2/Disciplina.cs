public class Disciplina{
    public int Id {get; set;}
    public string NomeDisciplina {get; set;} = string.Empty;
    public string CodigoDisciplina {get; set;}


    public IList<Aluno> Alunos {get; set;} = new List<Aluno>();
}