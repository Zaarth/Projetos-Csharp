public class Pessoa{
    private int nota;
    private string nome = "";

    public Pessoa(string nome, int nota){
        Nome = nome;
        Nota = nota;
    }

   
    public int Nota{
        get { return nota; }
        set { nota = value; }
    }

     public string Nome{
        get { return nome; }
        set { nome = value; }
    }

    public override string ToString()
    {
        return $"Nome: {Nome}, Nota: {Nota}";
    }
}