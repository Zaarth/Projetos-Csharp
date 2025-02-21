public class Cliente{

    private string nome = "";
    private int id;

    public string Nome{
        get { return nome; }
        set { nome = value;}
    }

    public int Id{
        get { return id; }
        set { id = value;}
    }

    public Cliente(int id,string nome){
        Nome = nome;
        Id = id;
    }

    public override string ToString(){
        return $"Nome: {Nome}, Id: {Id}";
    }




}