public class Compra{
    
    public Cliente Cliente {get; set;}
    public List<Produto> Produtos {get; set;}

    public Compra(Cliente cliente){
        Cliente = cliente;
        Produtos = new List<Produto>();
    }

    public void AdicionaProduto(Produto produto){
        Produtos.Add(produto);
    }

    public decimal CalcularTotal(){
        return Produtos.Sum(p => p.Preco);
    }

    public override string ToString(){
        string produtosStr = string.Join(", ", Produtos.Select(p => p.Nome));
        return $"Compra de: {Cliente.Nome}, Produtos: [{produtosStr}], Total: {CalcularTotal():C}";
    }







}