public class Produto{
        private int id;
        private string nome = "";
        private decimal preco;

      public string Nome{
        get { return nome; }
        set { nome = value;}
    }

     public int Id{
        get { return id; }
        set { id = value;}
    }

     public decimal Preco{
        get { return preco; }
        set { preco = value;}
    }

    public Produto(int id,string nome, decimal preco){
        Nome = nome;
        Id = id;
        Preco = preco;
    }

    public override string ToString(){
        return $"Nome: {Nome}, Id: {Id}, Preco: {Preco}";
    }

}