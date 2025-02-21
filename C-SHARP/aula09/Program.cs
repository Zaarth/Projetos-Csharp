public class Program{
    public static void Main(){
        Cliente cliente1 = new Cliente(1, "David");
        Cliente cliente2 = new Cliente(2, "Felipe");

        Produto produto1 = new Produto(1, "Notebook", 3500.00M);
        Produto produto2 = new Produto(2, "Iphone", 2600.00M);
        Produto produto3 = new Produto(3, "Fones de ouvido", 500.00M);
        Produto produto4 = new Produto(4, "Tablet", 1200.00M);

        Compra compra1 = new Compra(cliente1);
        compra1.AdicionaProduto(produto1);
        compra1.AdicionaProduto(produto2);
        compra1.AdicionaProduto(produto3);
        
        Compra compra2 = new Compra(cliente2);
        compra2.AdicionaProduto(produto1);
        compra2.AdicionaProduto(produto4);
        compra2.AdicionaProduto(produto3);


        Console.WriteLine(compra1);
        Console.WriteLine(compra2);
    }

}